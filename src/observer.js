const Observer = {
        start() {
          if (document.readyState !== "complete") {
            document.addEventListener("DOMContentLoaded", this.observe);

            return;
          }

          this.observe();
        },

        observe() {
          const elements = document.querySelectorAll(
            '[class*=" intersect:"],[class*=":intersect:"],[class^="intersect:"],[class="intersect"],[class*=" intersect "],[class^="intersect "],[class$=" intersect"]',
          );

          elements.forEach((element) => {
            let observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  element.removeAttribute("intersecting");
                  return;
                }

                element.setAttribute("intersecting", "");

                element.classList.contains("intersect-once") &&
                  observer.disconnect();
              });
            });

            observer.observe(element);
          });
        },
};
export default Observer;
