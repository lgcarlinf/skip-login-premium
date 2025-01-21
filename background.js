chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const modal = document.querySelector(".tp-modal");

        const modalComponent = document.querySelector(
          ".tp-modal-overscroll-prevented"
        );

        if (modal ?? modalComponent) {
          modal.remove();
        }

        const backdrop = document.querySelector(".tp-backdrop");
        const backdropComponent = document.querySelector(".tp-active");
        if (backdrop ?? backdropComponent) {
          backdrop.remove();
        }

        document.body.style.overflow = "scroll";

        document.body.classList.remove("tp-modal-open");
      },
    });
  } catch (err) {
    console.error("Failed to execute script:", err);
  }
});
