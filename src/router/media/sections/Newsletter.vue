<template>
  <section class="section newsletter" aria-label="Orbital Blast Newsletter">
    <div class="container">
      <p class="section-subtitle">Check Out Our</p>

      <h2 class="h2 section-title">
        Monthly <span class="span">Newsletter</span>
      </h2>

      <p class="section-text">
        Orbital Blast is a digital article that aims to inform community members
        about recent triumphs, relevant news, and other worthy highlights.
        <br />
        <br />
        With our newly redesigned website, Orbital Blast is the next step we're
        taking toward bolstering our online presence and building a stronger
        connection with our fanbase.
      </p>

      <div
        class="pdf-container"
        ref="containerRef"
        style="max-width: 800px; margin: 0 auto"
      >
        <canvas ref="pdfCanvas"></canvas>
        <p>Page {{ pageNumber }} of {{ numPages }}</p>

        <div class="pages">
          <button :disabled="pageNumber <= 1" @click="prevPage">
            &lt; Previous
          </button>
          <button :disabled="pageNumber >= numPages" @click="nextPage">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { newsletter } from "@/assets";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.mjs";

export default {
  name: "Newsletter",
  setup() {
    const numPages = ref(null);
    const pageNumber = ref(1);
    const width = ref(0);
    const containerRef = ref(null);
    const pdfCanvas = ref(null);

    const throttle = (func, delay) => {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func(...args);
      };
    };

    const renderPage = async (page) => {
      const viewport = page.getViewport({
        scale: width.value / page.getViewport({ scale: 1 }).width,
      });
      const canvas = pdfCanvas.value;
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    };

    const loadDocument = async () => {
      const loadingTask = pdfjsLib.getDocument(newsletter);
      const pdf = await loadingTask.promise;
      numPages.value = pdf.numPages;
      const page = await pdf.getPage(pageNumber.value);
      await renderPage(page);
    };

    const updateWidth = () => {
      if (containerRef.value) {
        width.value = containerRef.value.getBoundingClientRect().width;
        loadDocument();
      }
    };

    const throttledUpdateWidth = throttle(updateWidth, 1000);

    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", throttledUpdateWidth);

      return () => {
        window.removeEventListener("resize", throttledUpdateWidth);
      };
    });

    const prevPage = () => {
      if (pageNumber.value > 1) {
        pageNumber.value -= 1;
        loadDocument();
      }
    };

    const nextPage = () => {
      if (pageNumber.value < numPages.value) {
        pageNumber.value += 1;
        loadDocument();
      }
    };

    return {
      numPages,
      pageNumber,
      width,
      containerRef,
      pdfCanvas,
      prevPage,
      nextPage,
    };
  },
};
</script>

<style scoped>
.pdf-container {
  padding-right: 4rem;
  text-align: center;
}

.newsletter button {
  color: var(--text-pink);
}

.newsletter button:disabled {
  color: var(--text-champagne-pink);
  cursor: default;
}

.pages {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
