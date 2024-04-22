const fn = () => {
  console.log("hello world");
  const links = document.querySelectorAll("a");
  Array.from(links).forEach(link => {
    const href = link.getAttribute("href");
    if (href && link.classList.contains("no-underline")) {
      if (href.startsWith("/problems/")) {
        console.log(href);
        const text = link.innerText;
        let match = text.match(/\d+/);
        let problemId = Number(match[0])
        let type = "lc";
        if (href.indexOf("lcci") > -1) { // 程序员面试金典
          type = "lcci";
          match = text.match(/\d+\.\d+/);
          // 面试题 01.01. 判定字符是否唯一, 去掉零
          problemId = Number(match[0].split('.').map(Number).join('.'))
        }
        if (href.indexOf("lcof") > -1) {
          type = "lcof";
        }
        if (text.startsWith('LCR')) { // 剑指 Offer（专项突破）
          type = "lcof2";
        }
        if (problemId) {
          const newHref = `https://doocs.github.io/leetcode/${type}/${problemId}`;
          console.log(newHref);
          link.href = newHref;
          link.style.cursor = "pointer";
          link.style.textDecoration = "underline";
          link.target = "_blank";
          window.addEventListener("click", () => {
            window.open(newHref, "_blank");
          });
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
