<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Page Title -->
      <div class="mb-20 text-start">
        <h1 class="mb-4 text-4xl font-bold text-blue-500">Glossary</h1>
        <p class="text-base">Essential terms for non-resident property owners in Spain.</p>
      </div>

      <!-- Alphabetical Navigation -->
      <div class="mb-14 flex flex-wrap justify-start gap-2">
        <button
          v-for="letter in alphabet"
          :key="letter"
          @click="scrollToLetter(letter)"
          class="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-blue-500 bg-transparent text-lg font-semibold text-blue-500 transition-colors hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
        >
          {{ letter }}
        </button>
      </div>

      <!-- Glossary Content -->
      <div class="space-y-8">
        <!-- Letter A -->
        <div id="A" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">A</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                ATIB (Agencia Tributaria de las islas Baleares)
              </h3>
              <p class="text-gray-600">
                The tax agency for the Balearic Islands, responsible for tax collection and
                administration in the region.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                AEAT (Agencia Estatal de Administración Tributaria)
              </h3>
              <p class="text-gray-600">
                Spanish Tax Agency, the main tax authority in Spain responsible for collecting taxes
                and managing tax administration.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter B -->
        <div id="B" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">B</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Base Imponible</h3>
              <p class="text-gray-600">
                Taxable base - the amount on which tax is calculated, usually the cadastral value
                for property taxes.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter C -->
        <div id="C" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">C</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Capital Gains</h3>
              <p class="text-gray-600">
                Tax on the profit made when selling a property. Non-residents pay 19% (EU/EEA) or
                24% (non-EU) on the capital gain.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Cadastral Value</h3>
              <p class="text-gray-600">
                Official value assigned to a property by the Spanish government, used as the basis
                for calculating property taxes.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter D -->
        <div id="D" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">D</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                DNI (Documento Nacional de Identidad)
              </h3>
              <p class="text-gray-600">Spanish national identity document for Spanish citizens.</p>
            </div>
          </div>
        </div>

        <!-- Letter E -->
        <div id="E" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">E</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">EU/EEA Resident</h3>
              <p class="text-gray-600">
                Resident of European Union or European Economic Area countries, eligible for reduced
                tax rates (19%) on capital gains.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter F -->
        <div id="F" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">F</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Fiscal Year</h3>
              <p class="text-gray-600">
                The 12-month period for tax purposes, typically January 1st to December 31st in
                Spain.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter G -->
        <div id="G" class="scroll-mt-20">
              <h2 class="mb-4 text-4xl font-bold text-blue-600">G</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Gestor</h3>
              <p class="text-gray-600">
                Tax representative or agent who can handle tax matters on behalf of non-residents in
                Spain.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter H -->
        <div id="H" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">H</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Hacienda</h3>
              <p class="text-gray-600">
                Spanish Treasury, the government department responsible for tax collection and
                administration.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter I -->
        <div id="I" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">I</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                IBI (Impuesto sobre Bienes Inmuebles)
              </h3>
              <p class="text-gray-600">
                Local property tax paid annually to the municipality where the property is located.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                IRNR (Impuesto sobre la Renta de No Residentes)
              </h3>
              <p class="text-gray-600">
                Non-resident income tax for property owners who don't live in Spain.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                IRPF (Impuesto sobre la Renta de las Personas Físicas)
              </h3>
              <p class="text-gray-600">Personal income tax for Spanish residents.</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                IVA (Impuesto sobre el Valor Añadido)
              </h3>
              <p class="text-gray-600">
                Value Added Tax, applied to goods and services in Spain at rates of 4%, 10%, or 21%.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Imputed Income</h3>
              <p class="text-gray-600">
                Tax on the theoretical rental value of a property, calculated as 1.1% or 2% of the
                cadastral value.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter M -->
        <div id="M" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">M</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Modelo 210</h3>
              <p class="text-gray-600">
                Tax form for non-resident property owners to declare imputed income and capital
                gains.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Modelo 211</h3>
              <p class="text-gray-600">
                Tax form for withholding tax on property sales by non-residents.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                Modelo 720 (Declaration of Overseas Assets)
              </h3>
              <p class="text-gray-600">
                Annual declaration of overseas assets worth more than €50,000 for Spanish tax
                residents.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter N -->
        <div id="N" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">N</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                NIE (Número de Identificación de Extranjero)
              </h3>
              <p class="text-gray-600">
                Foreigner identification number required for non-Spanish citizens to conduct
                financial transactions in Spain.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">
                NIF (Número de Identificación Fiscal)
              </h3>
              <p class="text-gray-600">
                Tax identification number for Spanish citizens and companies.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Non-EU Resident</h3>
              <p class="text-gray-600">
                Resident of countries outside the European Union, subject to higher tax rates (24%)
                on capital gains.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter P -->
        <div id="P" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">P</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Plusvalía</h3>
              <p class="text-gray-600">
                Municipal capital gains tax on the increase in land value when selling a property.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Property Registry</h3>
              <p class="text-gray-600">
                Official registry where property ownership and legal status are recorded.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter Q -->
        <div id="Q" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">Q</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Quarter</h3>
              <p class="text-gray-600">
                Three-month period. Non-resident property taxes are typically paid quarterly.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter R -->
        <div id="R" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">R</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Rental Income</h3>
              <p class="text-gray-600">
                Income received from renting out a property, subject to income tax for
                non-residents.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Resident</h3>
              <p class="text-gray-600">
                Person who spends more than 183 days per year in Spain, subject to Spanish tax
                residency rules.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter S -->
        <div id="S" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">S</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">SUMA</h3>
              <p class="text-gray-600">
                Local tax collection agency in the Valencian Community, responsible for collecting
                IBI and other local taxes.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Surtax</h3>
              <p class="text-gray-600">
                Additional tax levied by regional governments on top of national taxes.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter T -->
        <div id="T" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">T</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Tax Residency</h3>
              <p class="text-gray-600">
                Determines which country has the right to tax your worldwide income. In Spain,
                you're considered a tax resident if you spend more than 183 days per year in the
                country.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Tax Year</h3>
              <p class="text-gray-600">
                The calendar year (January 1st to December 31st) for which taxes are calculated and
                paid.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter V -->
        <div id="V" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">V</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">VAT (Value Added Tax)</h3>
              <p class="text-gray-600">
                Consumption tax on goods and services, known as IVA in Spain.
              </p>
            </div>
          </div>
        </div>

        <!-- Letter W -->
        <div id="W" class="scroll-mt-20">
          <h2 class="mb-4 text-4xl font-bold text-blue-600">W</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold text-blue-500">Withholding Tax</h3>
              <p class="text-gray-600">
                Tax deducted at source, typically 3% on property sales by non-residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const scrollToLetter = (letter: string) => {
  const element = document.getElementById(letter);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<script lang="ts">
definePageMeta({
  title: 'Glossary - IberianTax',
});
</script>
