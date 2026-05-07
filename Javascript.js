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
    document.getElementById('ssdesc').innerHTML = '<h2>BULLYING</h2><p>Our Social Studies campaign is to raise awareness to how common bullying is in Filipino school communities. We are advocating for the awareness of brushed off and different forms of bullying, that most superiors and people in authority dismiss.<br><br>Our campaign explains the types of conflict found in certain bullying scenarios, and we analyze and explain how bullying can happen for any reason, even if it’s nonsensical or even unengaged.</p>'
});

div3.addEventListener('click', function () {
    document.getElementById('ssdesc').style.visibility = "visible";
    document.getElementById('ssdesc').innerHTML = "<h2>MENTAL STRESS</h2><p>Our campaign creates awareness for those struggling with stress in environments like school, work, and generally in life. We created infographics and posters to show and tell people the effects of stress, why it's important, and what can we do to prevent it.<br>We also created a survey that allows students and others to share their insights and experiences, making us aware of what's happening to those undergoing stress.</p>"
});
