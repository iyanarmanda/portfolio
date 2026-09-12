<script>
  import { onMount, onDestroy } from 'svelte';

  let imageUrl = null;
  let isOpen = false;

  // Fungsi untuk menangkap event dari komponen Astro
  function handleOpen(event) {
    imageUrl = event.detail.url;
    isOpen = true;
    document.body.style.overflow = 'hidden'; // Kunci scroll
  }

  function close() {
    isOpen = false;
    imageUrl = null;
    document.body.style.overflow = 'auto'; // Buka scroll
  }

  onMount(() => {
    // Dengarkan custom event bernama 'open-image-modal'
    window.addEventListener('open-image-modal', handleOpen);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('open-image-modal', handleOpen);
    }
  });
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-200"
    on:click={close}
  >
    <div class="relative w-full max-w-5xl flex flex-col items-center">
      
      <!-- Placeholder Tampilan Gambar -->
      <div class="w-full aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 rounded-lg overflow-hidden shadow-2xl">
        <!-- Nanti gunakan tag img: -->
        <!-- <img src={imageUrl} alt="Preview" class="w-full h-auto object-contain rounded-lg" /> -->
        
        <div class="flex flex-col items-center gap-2">
          <span class="font-mono text-sm uppercase tracking-widest text-zinc-400">Modal Image View</span>
          <span class="font-mono text-xs text-zinc-600">{imageUrl}</span>
        </div>
      </div>
      
      <p class="text-zinc-400 font-mono text-xs mt-6 tracking-widest uppercase">Click anywhere to close</p>
    </div>
  </div>
{/if}
