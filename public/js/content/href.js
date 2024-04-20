const fn = () => {
  console.log("hello world");
  const links = document.querySelectorAll("a");
  Array.from(links).forEach(link => {
    const href = link.getAttribute("href");
    if (href && link.classList.contains("no-underline")) {
      if (href.startsWith("/problems/")) {
        console.log(href);
        const text = link.innerText;
        const match = text.match(/\d+/);
        let type = "lc";
        if (href.indexOf("lcci")) {
          type = "lcci";
        } else if (href.indexOf("lcof")) {
          type = "lcof";
        }
        if (match) {
          const newHref = `https://doocs.github.io/leetcode/${type}/${match[0]}`;
          console.log(newHref);
          link.href = newHref;
          link.style.cursor = "pointer";
          link.target = "_blank";
        }
      }
    }
  });
};

setTimeout(() => {
  fn();
}, 1000);

/** 测试链接
 * https://leetcode.cn/problems/two-sum/description/
 * https://leetcode.cn/problems/check-permutation-lcci/description/
 * https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/
 */
