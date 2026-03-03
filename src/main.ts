import { chapterTitles } from './content/chapters';

interface SubChapterContent {
  title: string;
  content: string;
}

// Vite's glob import to find all content files
const contentModules = (import.meta as any).glob('./content/chapter*/*.ts');

async function renderContent(chapterId: string, subChapterKey: string) {
  const container = document.getElementById('chapter-content');
  if (!container) return;

  // Construct the expected path
  const path = `./content/chapter${chapterId}/${subChapterKey}.ts`;
  const loader = contentModules[path];

  if (!loader) {
    console.error(`Content not found for: ${path}`);
    return;
  }

  try {
    const module = await loader() as { content: SubChapterContent & { audioSrc?: string } };
    const { title, content, audioSrc } = module.content;
    console.log(`Loading chapter ${chapterId} section ${subChapterKey}:`, { title, audioSrc });
    const chapterTitle = chapterTitles[chapterId];

    // Add animation class
    container.classList.remove('fade-in');
    void container.offsetWidth; // Trigger reflow
    container.classList.add('fade-in');

    let audioHtml = '';
    if (audioSrc) {
      audioHtml = `
        <div class="audio-player-container">
          <div class="audio-label">Listen to this section:</div>
          <audio controls class="custom-audio-player">
            <source src="${audioSrc}" type="audio/mp4">
            Your browser does not support the audio element.
          </audio>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="chapter-info">Chapter ${chapterId} • ${chapterTitle}</div>
      <h2>${title}</h2>
      ${audioHtml}
      <div class="content-text">${content}</div>
    `;
  } catch (err) {
    console.error(`Failed to load content for ${path}`, err);
    container.innerHTML = `<p class="error">Error loading content.</p>`;
  }
}

function updateSubTabs(chapterId: string) {
  const subTabs = document.querySelectorAll('.sub-tab-item');
  let firstVisible: HTMLElement | null = null;

  subTabs.forEach(tab => {
    const tabEl = tab as HTMLElement;
    if (tabEl.dataset.chapter === chapterId) {
      tabEl.classList.remove('hidden');
      if (!firstVisible) firstVisible = tabEl;
    } else {
      tabEl.classList.add('hidden');
      tabEl.classList.remove('active');
    }
  });

  if (firstVisible) {
    (firstVisible as HTMLElement).click();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const mainTabs = document.querySelectorAll('.tab-item');
  const subTabs = document.querySelectorAll('.sub-tab-item');

  mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      mainTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const chapterId = (tab as HTMLElement).dataset.chapter;
      if (chapterId) {
        updateSubTabs(chapterId);
      }
    });
  });

  subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const chapterId = (tab as HTMLElement).dataset.chapter;
      subTabs.forEach(t => {
        if ((t as HTMLElement).dataset.chapter === chapterId) {
          t.classList.remove('active');
        }
      });
      tab.classList.add('active');

      // Extract sub-chapter key (e.g., "1.1") from text
      const text = tab.textContent?.trim() || "";
      const match = text.match(/^(\d+\.\d+)/);
      if (match && chapterId) {
        renderContent(chapterId, match[1]);
      }
    });
  });

  // Load first chapter by default
  const firstMainTab = document.querySelector('.tab-item[data-chapter="1"]') as HTMLElement | null;
  if (firstMainTab) firstMainTab.click();
});
