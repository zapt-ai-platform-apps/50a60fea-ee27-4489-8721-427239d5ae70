import { createSignal, onMount, Show, For } from 'solid-js';

function App() {
  const [colors, setColors] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    try {
      const response = await fetch('/api/getColors');
      if (!response.ok) {
        throw new Error('Failed to fetch colors');
      }
      const data = await response.json();
      setColors(data);
    } catch (error) {
      console.error('Error fetching colors:', error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div class="max-w-6xl mx-auto h-full">
        <h1 class="text-4xl font-bold text-purple-600 text-center mb-8">66 Color Trending</h1>
        <Show when={loading()}>
          <div class="flex justify-center items-center h-full">
            <p class="text-2xl text-purple-600">Loading colors...</p>
          </div>
        </Show>
        <Show when={!loading()}>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <For each={colors()}>
              {(color) => (
                <div
                  class="w-full h-28 rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  style={{ background: `#${color.hex}` }}
                  title={`#${color.hex}`}
                >
                  <div class="h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                    <span class="text-white font-semibold">#{color.hex}</span>
                  </div>
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default App;