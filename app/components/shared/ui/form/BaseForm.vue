<script setup lang="ts">
import { BaseInput, BaseDropdown, BaseTextarea, BaseButton } from '~/components/shared/ui';

defineOptions({
  name: 'BaseForm',
});

// Props del formulario
interface Props {
  title?: string;
  description?: string;
  categories?: Array<{ value: string; label: string }>;
  submitText?: string;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Contact Us',
  description: 'Get in touch with us for any questions or support.',
  categories: () => [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'partnership', label: 'Partnership' },
  ],
  submitText: 'Submit',
  loading: false,
});

// Emits
const emit = defineEmits<{
  submit: [data: FormData];
}>();

// Form data
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  category: '',
  message: '',
  recaptcha: false,
});

// Validation
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  category: '',
  message: '',
  recaptcha: '',
});

// Validation rules
const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = '';
  });

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  }

  // Subject validation
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
    isValid = false;
  }

  // Category validation
  if (!formData.category) {
    errors.category = 'Please select a category';
    isValid = false;
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  // reCAPTCHA validation
  if (!formData.recaptcha) {
    errors.recaptcha = 'Please complete the reCAPTCHA';
    isValid = false;
  }

  return isValid;
};

// Handle form submission
const handleSubmit = () => {
  if (validateForm()) {
    emit('submit', formData);
  }
};
</script>

<template>
  <div class="rounded-lg border border-neutral-200 bg-white p-8">
    <!-- Form Fields -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Name and Email Row -->
      <div class="grid gap-6 md:grid-cols-2">
        <BaseInput
          v-model="formData.name"
          label="Name*"
          placeholder="Your name"
          :error-text="errors.name"
          variant="form"
          required
        />
        <BaseInput
          v-model="formData.email"
          type="email"
          label="Email*"
          placeholder="your.email@example.com"
          :error-text="errors.email"
          variant="form"
          required
        />
      </div>

      <!-- Subject and Category Row -->
      <div class="grid gap-6 md:grid-cols-2">
        <BaseInput
          v-model="formData.subject"
          label="Subject*"
          placeholder="What is this about?"
          :error-text="errors.subject"
          variant="form"
          required
        />
        <BaseDropdown
          v-model="formData.category"
          label="Category*"
          placeholder="Select a category"
          :options="categories"
          :error-text="errors.category"
          variant="form"
          required
        />
      </div>

      <!-- Message -->
      <BaseTextarea
        v-model="formData.message"
        label="Message*"
        placeholder="Tell us more about your inquiry..."
        :error-text="errors.message"
        :max-length="1000"
        rows="6"
        variant="form"
        required
      />

      <!-- Submit Button -->
      <div class="flex justify-start">
        <BaseButton type="submit" variant="primary" :loading="loading" :disabled="loading">
          {{ submitText }}
        </BaseButton>
      </div>
    </form>
  </div>
</template>
