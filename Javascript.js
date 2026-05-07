// Wait for page to load
window.addEventListener("load", () => {
  const reveal = document.querySelector(".text-reveal");

  // trigger animation, is it nice
  setTimeout(() => {
    reveal.classList.add("active");
  }, 300);
});

//socials campaign js
const div1 = document.getElementById('1ss');
const div2 = document.getElementById('2ss');
const div3 = document.getElementById('3ss');

div1.addEventListener('click', function () {
    document.getElementById('ssdesc').style.visibility = "visible";
    document.getElementById('ssdesc').innerHTML = 
    '<h2>CYBERBULLYING</h2><p>Cyberbullying is bullying that happens through digital devices such as phones or computers. It often happens over social media, text, email, instant messages, and gaming. Cyberbullying often takes the form of sending or sharing harmful or mean content about someone to embarrass them. Sometimes this content is shared anonymously, making cyberbullying feel even more threatening.<br><br>33 in 100 Filipinos have experienced cyberbullying across many platforms, and a majority of those victims in the Philippines are children aged 13-17.<br><br>Our campaign aims to address this issue. We talk about what it is, statistics of it in the Philippines, and how to deal with it.</p>'
});

div2.addEventListener('click', function () {
    document.getElementById('ssdesc').style.visibility = "visible";
    document.getElementById('ssdesc').innerHTML = 'ijgsfdbdfsbdsbtjorpuRW'
});

div3.addEventListener('click', function () {
    document.getElementById('ssdesc').style.visibility = "visible";
    document.getElementById('ssdesc').innerHTML = 'ijgtjngndgnfgnpuRW'
});
