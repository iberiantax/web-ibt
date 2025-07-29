<template>
  <div class="min-h-screen bg-neutral-100 p-8 font-dm-sans">
    <div class="mx-auto">
      <h1 class="mb-8 text-center text-h1-m font-medium text-neutral-900">
        🎨 Sistema de Diseño - IberianTax
      </h1>

      <p class="mb-12 text-center text-p-m text-neutral-600">
        ✅ Sistema completo: Colores, Tipografía, Espaciado, Bordes, Sombras, Z-index y Grid
      </p>

      <!-- Tipografía -->
      <div class="mb-16">
        <h2 class="mb-8 text-center text-h2-m font-medium text-neutral-800">
          Tipografía - DM Sans
        </h2>

        <!-- H1 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H1 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (48px)</h4>
              <h1 class="text-h1-s font-medium text-neutral-900">H1 Small Header</h1>
              <p class="mt-2 text-small-s text-neutral-500">48px / 58px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (56px)</h4>
              <h1 class="text-h1-m font-medium text-neutral-900">H1 Medium Header</h1>
              <p class="mt-2 text-small-s text-neutral-500">56px / 68px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (64px)</h4>
              <h1 class="text-h1-l font-medium text-neutral-900">H1 Large Header</h1>
              <p class="mt-2 text-small-s text-neutral-500">64px / 78px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- H2 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H2 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (40px)</h4>
              <h2 class="text-h2-s font-medium text-neutral-900">H2 Small Header</h2>
              <p class="mt-2 text-small-s text-neutral-500">40px / 48px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (46px)</h4>
              <h2 class="text-h2-m font-medium text-neutral-900">H2 Medium Header</h2>
              <p class="mt-2 text-small-s text-neutral-500">46px / 52px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (52px)</h4>
              <h2 class="text-h2-l font-medium text-neutral-900">H2 Large Header</h2>
              <p class="mt-2 text-small-s text-neutral-500">52px / 56px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- H3 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H3 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (32px)</h4>
              <h3 class="text-h3-s font-medium text-neutral-900">H3 Small Header</h3>
              <p class="mt-2 text-small-s text-neutral-500">32px / 40px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (36px)</h4>
              <h3 class="text-h3-m font-medium text-neutral-900">H3 Medium Header</h3>
              <p class="mt-2 text-small-s text-neutral-500">36px / 44px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (40px)</h4>
              <h3 class="text-h3-l font-medium text-neutral-900">H3 Large Header</h3>
              <p class="mt-2 text-small-s text-neutral-500">40px / 46px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- H4 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H4 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (24px)</h4>
              <h4 class="text-h4-s font-medium text-neutral-900">H4 Small Header</h4>
              <p class="mt-2 text-small-s text-neutral-500">24px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (28px)</h4>
              <h4 class="text-h4-m font-medium text-neutral-900">H4 Medium Header</h4>
              <p class="mt-2 text-small-s text-neutral-500">28px / 38px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (32px)</h4>
              <h4 class="text-h4-l font-medium text-neutral-900">H4 Large Header</h4>
              <p class="mt-2 text-small-s text-neutral-500">32px / 46px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- H5 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H5 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (20px)</h4>
              <h5 class="text-h5-s font-medium text-neutral-900">H5 Small Header</h5>
              <p class="mt-2 text-small-s text-neutral-500">20px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (24px)</h4>
              <h5 class="text-h5-m font-medium text-neutral-900">H5 Medium Header</h5>
              <p class="mt-2 text-small-s text-neutral-500">24px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (24px)</h4>
              <h5 class="text-h5-l font-medium text-neutral-900">H5 Large Header</h5>
              <p class="mt-2 text-small-s text-neutral-500">24px / 36px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- H6 Headers -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">H6 Headers</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (18px)</h4>
              <h6 class="text-h6-s font-medium text-neutral-900">H6 Small Header</h6>
              <p class="mt-2 text-small-s text-neutral-500">18px / 32px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (20px)</h4>
              <h6 class="text-h6-m font-medium text-neutral-900">H6 Medium Header</h6>
              <p class="mt-2 text-small-s text-neutral-500">20px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (20px)</h4>
              <h6 class="text-h6-l font-medium text-neutral-900">H6 Large Header</h6>
              <p class="mt-2 text-small-s text-neutral-500">20px / 36px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- Body Text -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Body Text (P)</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (18px)</h4>
              <p class="text-p-s font-medium text-neutral-900">
                Este es un ejemplo de texto de cuerpo pequeño que muestra cómo se ve el estilo P
                Small en la aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">18px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (18px)</h4>
              <p class="text-p-m font-medium text-neutral-900">
                Este es un ejemplo de texto de cuerpo mediano que muestra cómo se ve el estilo P
                Medium en la aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">18px / 36px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (18px)</h4>
              <p class="text-p-l font-medium text-neutral-900">
                Este es un ejemplo de texto de cuerpo grande que muestra cómo se ve el estilo P
                Large en la aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">18px / 36px line-height / 500 weight</p>
            </div>
          </div>
        </div>

        <!-- Small Text -->
        <div class="mb-12">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Small Text</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Small (14px)</h4>
              <p class="text-small-s font-medium text-neutral-900">
                Este es un ejemplo de texto pequeño que muestra cómo se ve el estilo Small en la
                aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">14px / 22px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Medium (14px)</h4>
              <p class="text-small-m font-medium text-neutral-900">
                Este es un ejemplo de texto pequeño que muestra cómo se ve el estilo Small en la
                aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">14px / 22px line-height / 500 weight</p>
            </div>
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-2 text-h4-m font-medium text-neutral-600">Large (14px)</h4>
              <p class="text-small-l font-medium text-neutral-900">
                Este es un ejemplo de texto pequeño que muestra cómo se ve el estilo Small en la
                aplicación.
              </p>
              <p class="mt-2 text-small-s text-neutral-500">14px / 22px line-height / 500 weight</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Neutral Palette -->
      <div class="mb-12">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">Paleta Neutral</h2>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-50"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-50</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-100"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-100</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-200"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-200</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-300"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-300</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-400"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-400</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-500"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-500</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-600"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-600</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-700"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-700</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-800"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-800</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-neutral-900"></div>
            <p class="text-small-s font-medium text-neutral-700">neutral-900</p>
          </div>
        </div>
      </div>

      <!-- Blue Palette -->
      <div class="mb-12">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">Paleta Azul</h2>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-50"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-50</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-100"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-100</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-200"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-200</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-300"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-300</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-400"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-400</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-500"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-500</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-600"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-600</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-700"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-700</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-800"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-800</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-blue-900"></div>
            <p class="text-small-s font-medium text-neutral-700">blue-900</p>
          </div>
        </div>
      </div>

      <!-- Green Palette -->
      <div class="mb-12">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">Paleta Verde</h2>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-50"></div>
            <p class="text-small-s font-medium text-neutral-700">green-50</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-100"></div>
            <p class="text-small-s font-medium text-neutral-700">green-100</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-200"></div>
            <p class="text-small-s font-medium text-neutral-700">green-200</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-300"></div>
            <p class="text-small-s font-medium text-neutral-700">green-300</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-400"></div>
            <p class="text-small-s font-medium text-neutral-700">green-400</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-500"></div>
            <p class="text-small-s font-medium text-neutral-700">green-500</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-600"></div>
            <p class="text-small-s font-medium text-neutral-700">green-600</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-700"></div>
            <p class="text-small-s font-medium text-neutral-700">green-700</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-800"></div>
            <p class="text-small-s font-medium text-neutral-700">green-800</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-green-900"></div>
            <p class="text-small-s font-medium text-neutral-700">green-900</p>
          </div>
        </div>
      </div>

      <!-- Orange Palette -->
      <div class="mb-12">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">Paleta Naranja</h2>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-50"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-50</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-100"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-100</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-200"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-200</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-300"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-300</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-400"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-400</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-500"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-500</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-600"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-600</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-700"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-700</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-800"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-800</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-orange-900"></div>
            <p class="text-small-s font-medium text-neutral-700">orange-900</p>
          </div>
        </div>
      </div>

      <!-- Yellow Palette -->
      <div class="mb-12">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">Paleta Amarilla</h2>
        <div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-50"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-50</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-100"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-100</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-200"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-200</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-300"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-300</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-400"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-400</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-500"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-500</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-600"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-600</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-700"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-700</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-800"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-800</p>
          </div>
          <div class="text-center">
            <div class="mb-2 h-16 rounded-lg border border-neutral-200 bg-yellow-900"></div>
            <p class="text-small-s font-medium text-neutral-700">yellow-900</p>
          </div>
        </div>
      </div>

      <!-- Sistema de Bordes y Border Radius -->
      <div class="mb-16">
        <h2 class="mb-8 text-center text-h2-m font-medium text-neutral-800">
          Sistema de Bordes y Border Radius
        </h2>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Border -->
          <div class="rounded-lg border border-neutral-200 bg-white p-8 shadow-md">
            <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Border</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded border-0 bg-purple-100"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-0</code>
                    <p class="text-small-s text-neutral-500">0px</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded border border-blue-300 bg-purple-100"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-1</code>
                    <p class="text-small-s text-neutral-500">1px</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded border-2 border-blue-300 bg-purple-100"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-2</code>
                    <p class="text-small-s text-neutral-500">2px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Border Radius -->
          <div class="rounded-lg border border-neutral-200 bg-white p-8 shadow-md">
            <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Border Radius</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded-0 bg-blue-500"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-radius-0</code>
                    <p class="text-small-s text-neutral-500">0px</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded-8 bg-blue-500"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-radius-8</code>
                    <p class="text-small-s text-neutral-500">8px</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded-16 bg-blue-500"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-radius-16</code>
                    <p class="text-small-s text-neutral-500">16px</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded-24 bg-blue-500"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$border-radius-24</code>
                    <p class="text-small-s text-neutral-500">24px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sistema de Sombras y Z-index -->
      <div class="mb-16">
        <h2 class="mb-8 text-center text-h2-m font-medium text-neutral-800">
          Sistema de Sombras y Z-index
        </h2>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Shadow -->
          <div class="rounded-lg border border-neutral-200 bg-white p-8 shadow-md">
            <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Shadow</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="h-16 w-16 rounded border border-neutral-200 bg-white"></div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$shadow-0</code>
                    <p class="text-small-s text-neutral-500">0px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Z-index -->
          <div class="rounded-lg border border-neutral-200 bg-white p-8 shadow-md">
            <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Z-index</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <div class="h-8 w-8 rounded-sm bg-gray-300 opacity-50"></div>
                    <div
                      class="absolute -left-1 -top-1 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div
                      class="absolute -left-2 -top-2 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div class="absolute -left-3 -top-3 h-4 w-4 rounded-sm bg-blue-500"></div>
                  </div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$z-index-100</code>
                    <p class="text-small-s text-neutral-500">100</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <div class="h-8 w-8 rounded-sm bg-gray-300 opacity-50"></div>
                    <div
                      class="absolute -left-1 -top-1 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div
                      class="absolute -left-2 -top-2 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div class="absolute -left-1 -top-1 h-4 w-4 rounded-sm bg-blue-500"></div>
                  </div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$z-index-300</code>
                    <p class="text-small-s text-neutral-500">300</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <div class="h-8 w-8 rounded-sm bg-gray-300 opacity-50"></div>
                    <div
                      class="absolute -left-1 -top-1 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div
                      class="absolute -left-2 -top-2 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div class="absolute -left-2 -top-2 h-4 w-4 rounded-sm bg-blue-500"></div>
                  </div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$z-index-600</code>
                    <p class="text-small-s text-neutral-500">600</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <div class="h-8 w-8 rounded-sm bg-gray-300 opacity-50"></div>
                    <div
                      class="absolute -left-1 -top-1 h-8 w-8 rounded-sm bg-gray-300 opacity-50"
                    ></div>
                    <div class="absolute -left-2 -top-2 h-8 w-8 rounded-sm bg-blue-500"></div>
                  </div>
                  <div>
                    <code class="text-small-s font-medium text-blue-600">$z-index-900</code>
                    <p class="text-small-s text-neutral-500">900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sistema de Grid -->
      <div class="mb-16">
        <h2 class="mb-8 text-center text-h2-m font-medium text-neutral-800">
          Sistema de Grid (Breakpoints)
        </h2>

        <div class="rounded-lg border border-neutral-200 bg-white p-8 shadow-md">
          <h3 class="mb-6 text-h3-m font-medium text-neutral-700">Grid Breakpoints</h3>
          <div class="space-y-6">
            <div class="flex items-center justify-between rounded-lg bg-blue-50 p-4">
              <div>
                <h4 class="text-h5-m font-medium text-neutral-900">XL (Extra Large)</h4>
                <p class="text-small-s text-neutral-600">1680px and more</p>
              </div>
              <code class="text-small-s font-medium text-blue-600">@xl</code>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-green-50 p-4">
              <div>
                <h4 class="text-h5-m font-medium text-neutral-900">L (Large)</h4>
                <p class="text-small-s text-neutral-600">1201px - 1679px</p>
              </div>
              <code class="text-small-s font-medium text-blue-600">@l</code>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-orange-50 p-4">
              <div>
                <h4 class="text-h5-m font-medium text-neutral-900">M (Medium)</h4>
                <p class="text-small-s text-neutral-600">769px - 1200px</p>
              </div>
              <code class="text-small-s font-medium text-blue-600">@m</code>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-yellow-50 p-4">
              <div>
                <h4 class="text-h5-m font-medium text-neutral-900">S (Small)</h4>
                <p class="text-small-s text-neutral-600">320px - 768px</p>
              </div>
              <code class="text-small-s font-medium text-blue-600">@s</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Componentes de ejemplo -->
      <div class="mt-16">
        <h2 class="mb-6 text-center text-h2-m font-medium text-neutral-800">
          Componentes de Ejemplo
        </h2>

        <!-- BaseAccordion Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseAccordion Component
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- Primary Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Primary (Fondo Blanco)
              </h4>
              <div class="space-y-4">
                <!-- Collapsed Primary -->
                <BaseAccordion title="Text" variant="primary" size="md">
                  <p class="text-p-s font-light">Contenido del acordeón primary</p>
                </BaseAccordion>
              </div>
            </div>

            <!-- Secondary Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Secondary (Fondo Azul Claro)
              </h4>
              <div class="space-y-4">
                <!-- Collapsed Secondary -->
                <BaseAccordion title="Text" variant="secondary" size="md">
                  <p class="text-p-s font-light">Contenido del acordeón secondary</p>
                </BaseAccordion>
              </div>
            </div>
          </div>
        </div>

        <!-- BaseInput Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseInput Component
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- White Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante White (Fondo Blanco)
              </h4>
              <div class="space-y-4">
                <BaseInput label="Label" placeholder="Text" variant="white" show-info-icon />
                <BaseInput
                  label="Label"
                  placeholder="Text"
                  variant="white"
                  show-info-icon
                  value="Text"
                />
              </div>
            </div>

            <!-- Blue Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Blue (Fondo Azul Claro)
              </h4>
              <div class="space-y-4">
                <BaseInput label="Label" placeholder="Text" variant="blue" show-info-icon />
                <BaseInput
                  label="Label"
                  placeholder="Text"
                  variant="blue"
                  show-info-icon
                  value="Text"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- BaseDropdown Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseDropdown Component
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- White Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante White (Fondo Blanco)
              </h4>
              <div class="space-y-4">
                <BaseDropdown
                  label="Label"
                  placeholder="Text"
                  variant="white"
                  show-info-icon
                  :options="dropdownOptions"
                  v-model="dropdown1Value"
                />
                <BaseDropdown
                  label="Label"
                  placeholder="Text"
                  variant="white"
                  show-info-icon
                  :options="dropdownOptions"
                  v-model="dropdown2Value"
                />
              </div>
            </div>

            <!-- Blue Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Blue (Fondo Azul Claro)
              </h4>
              <div class="space-y-4">
                <BaseDropdown
                  label="Label"
                  placeholder="Text"
                  variant="blue"
                  show-info-icon
                  :options="dropdownOptions"
                  v-model="dropdown3Value"
                />
                <BaseDropdown
                  label="Label"
                  placeholder="Text"
                  variant="blue"
                  show-info-icon
                  :options="dropdownOptions"
                  v-model="dropdown4Value"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- BaseTextarea Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseTextarea Component
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- White Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante White (Fondo Blanco)
              </h4>
              <div class="space-y-4">
                <BaseTextarea
                  label="Label"
                  placeholder="Escribe tu texto aquí..."
                  variant="white"
                  show-info-icon
                  v-model="textarea1Value"
                />
                <BaseTextarea
                  label="Label"
                  placeholder="Escribe tu texto aquí..."
                  variant="white"
                  show-info-icon
                  v-model="textarea2Value"
                  :max-length="100"
                  helper-text="Máximo 100 caracteres"
                />
              </div>
            </div>

            <!-- Blue Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Blue (Fondo Azul Claro)
              </h4>
              <div class="space-y-4">
                <BaseTextarea
                  label="Label"
                  placeholder="Escribe tu texto aquí..."
                  variant="blue"
                  show-info-icon
                  v-model="textarea3Value"
                />
                <BaseTextarea
                  label="Label"
                  placeholder="Escribe tu texto aquí..."
                  variant="blue"
                  show-info-icon
                  v-model="textarea4Value"
                  :max-length="200"
                  helper-text="Máximo 200 caracteres"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- BaseSearch Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseSearch Component
          </h3>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <!-- White Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante White (Fondo Blanco)
              </h4>
              <div class="space-y-4">
                <BaseSearch
                  placeholder="Search"
                  variant="white"
                  v-model="search1Value"
                  :search-results="searchResults1"
                  :loading="searchLoading1"
                  @search="handleSearch1"
                />
                <BaseSearch
                  placeholder="Search"
                  variant="white"
                  v-model="search2Value"
                  :search-results="searchResults2"
                  :loading="searchLoading2"
                  @search="handleSearch2"
                />
              </div>
            </div>

            <!-- Blue Variant -->
            <div class="rounded-lg border border-neutral-200 bg-white p-6 shadow-md">
              <h4 class="mb-4 text-h4-m font-medium text-neutral-900">
                Variante Blue (Fondo Azul Claro)
              </h4>
              <div class="space-y-4">
                <BaseSearch
                  placeholder="Search"
                  variant="blue"
                  v-model="search3Value"
                  :search-results="searchResults3"
                  :loading="searchLoading3"
                  @search="handleSearch3"
                />
                <BaseSearch
                  placeholder="Search"
                  variant="blue"
                  v-model="search4Value"
                  :search-results="searchResults4"
                  :loading="searchLoading4"
                  @search="handleSearch4"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- BaseCheckbox Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseCheckbox Component
          </h3>

          <!-- Fondo Gris Claro -->
          <div class="mb-8 rounded-lg bg-gray-100 p-6">
            <h4 class="mb-4 text-h4-m font-medium text-neutral-900">Fondo Gris Claro</h4>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <BaseCheckbox text="Text" variant="default" v-model="checkbox1" />
              <BaseCheckbox text="Text" variant="blue" v-model="checkbox2" />
            </div>
          </div>

          <!-- Fondo Azul Oscuro -->
          <div class="mb-8 rounded-lg bg-blue-900 p-6">
            <h4 class="mb-4 text-h4-m font-medium text-white">Fondo Azul Oscuro</h4>
            <div class="grid grid-cols-1 gap-4">
              <BaseCheckbox text="Text" variant="dark" v-model="checkbox3" />
            </div>
          </div>
        </div>

        <!-- BaseLink Component -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            BaseLink Component
          </h3>

          <!-- Rectangular Buttons -->
          <div class="space-y-6">
            <!-- Row 1: Blue Variants -->
            <div class="flex flex-wrap gap-4">
              <BaseLink variant="blue" text="Text" />
              <BaseLink variant="blue-600" text="Text" />
              <BaseLink variant="blue" text="Text" disabled />
            </div>

            <!-- Row 2: Black Variants -->
            <div class="flex flex-wrap gap-4">
              <BaseLink variant="black" text="Text" />
              <BaseLink variant="black" text="Text" disabled />
            </div>

            <!-- Row 3: Outline Variants -->
            <div class="flex flex-wrap gap-4">
              <BaseLink variant="white-outline" text="Text" />
              <BaseLink variant="blue-outline" text="Text" />
              <BaseLink variant="white-outline" text="Text" disabled />
            </div>

            <!-- Row 4: Green Variants -->
            <div class="flex flex-wrap gap-4">
              <BaseLink variant="green-500" text="Text" />
              <BaseLink variant="green-600" text="Text" />
              <BaseLink variant="green-500" text="Text" disabled />
            </div>

            <!-- Row 5: Circular Buttons -->
            <div class="flex flex-wrap gap-4">
              <BaseLink variant="circular-outline" />
              <BaseLink variant="circular" />
            </div>
          </div>
        </div>

        <!-- BaseSegmentedControl -->
        <section class="mb-8">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseSegmented</h3>
          <!-- Light Variant -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Light Variant</h4>
            <BaseSegmentedControl v-model="segmentedValue" :segments="segments" variant="light" />
          </div>

          <!-- Dark Variant -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Dark Variant</h4>

            <BaseSegmentedControl v-model="segmentedValue" :segments="segments" variant="dark" />
          </div>
        </section>

        <!-- BaseCard -->
        <section class="mb-8">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseCard</h3>

          <!-- Default Type -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Default Type</h4>
            <div class="flex flex-wrap gap-4">
              <BaseCard
                type="default-white"
                title="Annual Tax Calculator"
                description="Own a property in Spain? Use our tax tool to calculate how much you have to pay in your annual non-resident tax return in Spain."
                buttonText="Try now"
                buttonVariant="outline"
              />
              <BaseCard
                type="default"
                title="Imputed income"
                description="Standard income tax declaration for non-resident property owners in Spain."
                buttonText="More info"
                buttonVariant="primary"
              />
            </div>
          </div>

          <!-- Blog Type -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Blog Type</h4>
            <BaseCard
              type="blog"
              title="Title"
              description="Text"
              buttonText="Read more"
              buttonVariant="primary"
            />
          </div>

          <!-- Case Studies Type -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Case Studies Type</h4>
            <BaseCard
              type="case-studies"
              title="Title"
              :financialData="{
                total: 'XXX.XXX €',
                owners: 'X owners',
                sellPrice: 'XXX.XXX €',
                saleCosts: 'XXX.XXX €',
                purchasePrice: 'XXX.XXX €',
                purchaseCosts: 'XXX.XXX €',
                withholdingTax: 'XXX.XXX €',
                nationality: 'Nationality',
                taxRateEU: 'XX %',
              }"
              taxCalculation="Tax calculation: ((100.000 - 4.000) - (60.000 + 6.000)) x 19% = 5.700 - 3.000 = 2.700 €"
            />
          </div>

          <!-- Review Type -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Review Type</h4>
            <BaseCard
              type="review"
              description="I have previously used other people to file my taxes in Spain, however they have made errors..."
              reviewerName="Name Surname"
              :rating="4.5"
            />
          </div>

          <!-- Pricing Type -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Pricing Type</h4>
            <BaseCard
              type="pricing"
              subtitle="Subtitle"
              price="Title"
              pricePeriod="/ year (inc. VAT)"
              buttonText="Get started"
              buttonVariant="primary"
              disclaimer="Renews every year. Cancel anytime."
            />
          </div>
        </section>

        <!-- BaseBanner -->
        <section class="mb-8">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseBanner</h3>

          <!-- Banner por defecto -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Default Banner</h4>
            <BaseBanner />
          </div>

          <!-- Banner con imagen -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Banner with Image</h4>
            <BaseBanner image="/images/hero/FrameHero.png" imageAlt="Modern living room" />
          </div>

          <!-- Banner con fondo personalizado -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Custom Background</h4>
            <BaseBanner
              backgroundColor="bg-green-100"
              title="Custom Title"
              description="This is a custom banner with different background color"
              buttonText="Custom Button"
            />
          </div>

          <!-- Banner solo con título -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Banner with Title Only</h4>
            <BaseBanner
              :showDescription="false"
              title="This banner only shows the title"
              buttonText="Title Only"
            />
          </div>
        </section>

        <!-- BaseSteppers -->
        <section class="mb-8">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseSteppers</h3>

          <!-- Ejemplo con razones comunes -->

          <div class="mb-6">
            <h4 class="mb-6 text-lg font-medium">Stepper Horizontal</h4>
            <BaseStepperHorizontal
              :steps="[
                {
                  number: 1,
                  title: 'Ownership Period Errors',
                  description:
                    'Incorrect calculation of the ownership period, leading to taxes being paid for periods when you didn\'t actually own the property.',
                },
                {
                  number: 2,
                  title: 'Incorrect Tax Rate',
                  description:
                    'Using the standard 24% rate instead of the reduced 19% rate for EU/EEA residents, or vice versa.',
                },
                {
                  number: 3,
                  title: 'Incorrect Income Basis',
                  description:
                    'Using the wrong percentage (2% vs 1.1%) of the cadastral value to calculate the imputed income.',
                },
              ]"
            />
          </div>
        </section>

        <!-- BaseStepperVertical -->
        <section class="mb-8 mt-12">
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Stepper Vertical</h4>
            <BaseStepperVertical
              title=""
              :steps="[
                {
                  number: 1,
                  title: 'Register for free',
                  description:
                    'Create an account in seconds. No credit card required. Fill in your personal details.',
                },
                {
                  number: 2,
                  title: 'Fill out your information',
                  description:
                    'Answer a few simple questions about your property and ownership details.',
                },
                {
                  number: 3,
                  title: 'Choose filing and payment method',
                  description:
                    'Answer a few simple questions about your property and ownership details.',
                },
              ]"
            />
          </div>
        </section>

        <section class="mb-8">
          <h4 class="mb-6 text-lg font-medium">Stepper base</h4>
          <HowItWorks />
        </section>

        <!-- BaseInfoCard -->
        <section class="mb-8 mt-20">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseInfoCard</h3>
          <!-- Ejemplo con imagen -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Info Card with Image</h4>
            <BaseInfoCard
              title="Protect your return"
              description="Add optional audit protection services to your tax return and enjoy the piece of mind knowing that Expatfile has your back in the case of an IRS audit."
              buttonText="Get started"
              image="/images/hero/FrameHero.png"
              imageAlt="Protection services"
            />
          </div>
        </section>

        <!-- BaseVerticalCard -->
        <section class="mb-8">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">BaseVerticalCard</h3>
          <!-- Ejemplo con imagen -->
          <div class="mb-6">
            <h4 class="mb-2 text-lg font-medium">Vertical Card with Image</h4>
            <BaseVerticalCard
              title="Unmatched security"
              description="Secure your tax filing with Expatfile's quantum-proof encryption and passwordless login, safeguarded by weekly PCI-compliant audits. Our cutting-edge technology ensures your financial data is protected, today and tomorrow. Experience the security you deserve."
              buttonText="Get started"
              image="/images/hero/FrameHero.png"
              imageAlt="Security services"
            />
          </div>
        </section>

        <!-- Certificate Card Example -->
        <div class="mb-12">
          <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
            Certificate Card Example
          </h3>
          <div class="mx-auto max-w-2xl">
            <div class="rounded-lg border border-neutral-200 bg-white p-8">
              <h2 class="mb-4 text-2xl font-bold text-[#1364B3]">When do I need it?</h2>
              <p class="mb-6 text-base text-neutral-700">
                You will need this certificate in various situations where you must officially
                communicate with government agencies, companies, or other entities, such as:
              </p>
              <ul class="space-y-2 text-base text-neutral-700">
                <li class="flex items-start">
                  <span class="mr-2 mt-1 text-neutral-400">•</span>
                  <span>Accommodation Registration with SES Hospedajes,</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1 text-neutral-400">•</span>
                  <span>Filing a tax return,</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1 text-neutral-400">•</span>
                  <span>Electronically signing official documents,</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 mt-1 text-neutral-400">•</span>
                  <span>Interacting with social security institutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- BaseReportsCard -->
        <section class="mb-8">
          <h4 class="mb-2 text-lg font-medium">Reports Card Example</h4>
          <!-- Usar el componente fuera del padding del layout -->
          <div class="-mx-8">
            <BaseReportsCard
              title="Powerful reports for detailed financial insights"
              description="We've a range of powerful reports designed to ensure you are able to maximize return on investment and have a stress free tax season."
              image="/images/hero/FrameHero.png"
              imageAlt="Financial reports"
              :basicReports="[
                { text: 'Income and expense' },
                { text: 'Schedule E' },
                { text: 'Rent Ledger' },
                { text: 'Online Payments' },
              ]"
              :advancedReports="[
                { text: 'Profit and loss summary' },
                { text: 'Income and expense detailed' },
                { text: 'Rent Payment Difference' },
                { text: 'Overdue Rent Payments' },
              ]"
            />
          </div>
        </section>

        <!-- Hero Components -->
        <div class="mt-16">
          <!-- ReferralHero Component -->
          <div class="mb-8">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              ReferralHero Component
            </h3>
            <ReferralHero />
          </div>

          <!-- Form210Hero Component -->
          <div class="mb-12">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              Form210Hero Component
            </h3>
            <Form210Hero />
          </div>

          <!-- AboutValues Component -->
          <div class="mb-12">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              AboutValues Component
            </h3>
            <AboutValues />
          </div>

          <!-- TeamSection Component -->
          <div class="mb-12">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              TeamSection Component
            </h3>
            <TeamSection />
          </div>

          <!-- MediaPresence Component -->
          <div class="mb-12">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              MediaPresence Component
            </h3>
            <MediaPresence />
          </div>

          <!-- BaseForm Component -->
          <div class="mb-12">
            <h3 class="mb-6 text-center text-h3-m font-medium text-neutral-700">
              BaseForm Component
            </h3>
            <div class="mx-auto max-w-2xl">
              <BaseForm
                title="Contact Us"
                description="Get in touch with us for any questions or support."
                @submit="handleFormSubmit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BaseAccordion,
  BaseInput,
  BaseDropdown,
  BaseTextarea,
  BaseSearch,
  BaseCheckbox,
  BaseLink,
  BaseSegmentedControl,
  BaseCard,
  BaseBanner,
  BaseStepperHorizontal,
  BaseStepperVertical,
  BaseInfoCard,
  BaseVerticalCard,
  BaseReportsCard,
  BaseForm,
} from '~/components/shared/ui';
import { ReferralHero, Form210Hero } from '~/components/hero';
import AboutValues from '~/components/home/AboutValues.vue';
import TeamSection from '~/components/home/TeamSection.vue';
import MediaPresence from '~/components/home/MediaPresence.vue';
import HowItWorks from '~/components/home/HowItWorks.vue';

// Estado reactivo para los dropdowns
const dropdown1Value = ref('');
const dropdown2Value = ref('');
const dropdown3Value = ref('');
const dropdown4Value = ref('');

// Estado reactivo para los textarea
const textarea1Value = ref('');
const textarea2Value = ref('');
const textarea3Value = ref('');
const textarea4Value = ref('');

// Estado reactivo para los search
const search1Value = ref('Iberian');
const search2Value = ref('');
const search3Value = ref('Tax');
const search4Value = ref('');

const searchResults1 = ref([
  {
    id: '1',
    title: 'Who is IberianTax?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
  {
    id: '2',
    title: 'Why use IberianTax?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
  {
    id: '3',
    title: 'Do you have references?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
]);
const searchResults2 = ref([]);
const searchResults3 = ref([
  {
    id: '1',
    title: 'Tax Calculator',
    description:
      'Calculate your non-resident property taxes in Spain with our easy-to-use calculator.',
  },
  {
    id: '2',
    title: 'Tax Guide 2024',
    description: 'Complete guide to non-resident property taxes in Spain for 2024.',
  },
]);
const searchResults4 = ref([]);

const searchLoading1 = ref(false);
const searchLoading2 = ref(false);
const searchLoading3 = ref(false);
const searchLoading4 = ref(false);

// Estado reactivo para los checkboxes
const checkbox1 = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(true);

// Estado reactivo para el segmented control
const segmentedValue = ref('option1');
const segments = [
  { value: 'option1', label: '1 owner' },
  { value: 'option2', label: '2 owners' },
];

// Opciones de ejemplo
const dropdownOptions = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' },
];

// Datos de ejemplo para búsqueda
const mockSearchData = [
  {
    id: '1',
    title: 'Who is IberianTax?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
  {
    id: '2',
    title: 'Why use IberianTax?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
  {
    id: '3',
    title: 'Do you have references?',
    description:
      'IberianTax is an online service that helps non-resident property owners in Spain file and pay their taxes....',
  },
];

// Funciones de búsqueda simulada
const handleSearch1 = (query: string) => {
  searchLoading1.value = true;
  setTimeout(() => {
    searchResults1.value = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
    searchLoading1.value = false;
  }, 500);
};

const handleSearch2 = (query: string) => {
  searchLoading2.value = true;
  setTimeout(() => {
    searchResults2.value = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
    searchLoading2.value = false;
  }, 500);
};

const handleSearch3 = (query: string) => {
  searchLoading3.value = true;
  setTimeout(() => {
    searchResults3.value = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
    searchLoading3.value = false;
  }, 500);
};

const handleSearch4 = (query: string) => {
  searchLoading4.value = true;
  setTimeout(() => {
    searchResults4.value = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    );
    searchLoading4.value = false;
  }, 500);
};

// Form submission handler
const handleFormSubmit = (formData: {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  recaptcha: boolean;
}) => {
  console.log('Form submitted:', formData);
  // Aquí puedes agregar la lógica para enviar el formulario
  alert('Form submitted successfully!');
};
</script>

<script lang="ts">
definePageMeta({
  title: 'Sistema de Diseño - IberianTax',
});
</script>
