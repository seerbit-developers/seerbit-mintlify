(() => {
  const activeHeadingOffset = 120;
  let animationFrame;

  const getHashTarget = () => {
    if (!window.location.hash) return null;

    try {
      return document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    } catch {
      return null;
    }
  };

  const getHeadingLevel = (element) => {
    const match = element?.tagName.match(/^H([1-6])$/);
    return match ? Number(match[1]) : null;
  };

  const getNextSectionHeading = (heading, level) => {
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')];
    const currentHeadingIndex = headings.indexOf(heading);

    return headings
      .slice(currentHeadingIndex + 1)
      .find((element) => getHeadingLevel(element) <= level);
  };

  const isOutsideActiveSection = (target) => {
    const targetLevel = getHeadingLevel(target);

    if (!targetLevel) {
      const bounds = target.getBoundingClientRect();
      return bounds.bottom < activeHeadingOffset || bounds.top > window.innerHeight;
    }

    const targetBounds = target.getBoundingClientRect();
    const nextHeading = getNextSectionHeading(target, targetLevel);
    const nextHeadingBounds = nextHeading?.getBoundingClientRect();

    return (
      targetBounds.top > activeHeadingOffset ||
      (nextHeadingBounds && nextHeadingBounds.top <= activeHeadingOffset)
    );
  };

  const clearStaleAnchor = () => {
    animationFrame = undefined;

    const target = getHashTarget();
    if (!target || !isOutsideActiveSection(target)) return;

    window.history.replaceState(
      window.history.state,
      '',
      `${window.location.pathname}${window.location.search}`,
    );
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!window.location.hash || animationFrame) return;
      animationFrame = window.requestAnimationFrame(clearStaleAnchor);
    },
    { passive: true },
  );
})();
