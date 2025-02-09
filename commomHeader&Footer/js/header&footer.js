let header = document.getElementById('header')
let footer = document.getElementById('footer')

header.innerHTML= `<div class="nav">
    <div class="logo">
        <img src="../../imageAndSvg/navimg/logo.png" alt="logo">

        Skill Hive
    </div>
    <ul class="navlist ">

        <li><a href="../../index.html">Home</a></li>
        <li><a href="../../pages/course/course.html">Courses</a> <i class="icon icon-advanced"></i> </li>
        <li><a href="../../pages/about/about.html">About Us</a></li>
        <li>Placements</li>
        <li>Branches</li>
    </ul>
    <div>
        <botton class="btn  bg-prime-b">
            Contact Us
        </botton>
    </div>

</div>`
  
  footer.innerHTML= `<footer class="footer">
    <section class="section9">
        <aside class="f-aside1">

            <div>
                <div class="f-logo logo">
                    <img src="../../imageAndSvg/footerimg/f-logo.png" alt="logo">

                    Skill Hive
                </div>
                <p>Stay inspired and connected:</p>
                <div class="f-social">
                    <img src="../../imageAndSvg/footerimg/Instagram.svg" alt="">
                    <img src="../../imageAndSvg/footerimg/LinkedIn.svg" alt="">
                    <img src="../../imageAndSvg/footerimg/WhatsApp.svg" alt="">
                    <img src="../../imageAndSvg/footerimg/YouTube.svg" alt="">
                </div>
            </div>

            <div>
                <h1 class="f-logo">
                    Subscribe to Our Newsletter
                </h1>
                <p class="f-mail-p">Don’t miss the latest updates, insights, and exclusive offers from Skill
                    Hive! Enter your email to stay in the loop.</p>
                <div class=" btn-group">
                    <div class="search-group">

                        <div>
                            <input class="f-in" type="email" placeholder="Enter your email" />

                        </div>
                    </div>

                    <botton class="btn  bg-prime-y">
                        Subscribe
                    </botton>
                </div>
            </div>
        </aside>


        <aside class="f-aside2">
            <dl >
                <dt>About Skill Hive</dt>
                <dd>Skill Hive is your launchpad for a tech-driven career. With expert-led training, real-world
                    projects, and dedicated placement support, we help you transform your ambitions into
                    reality.</dd>
                <dd> <a href="#"> Learn More About Us →</a></dd>
            </dl>

            <dl>
                <dt>Quick links</dt>
                <dd>Home</dd>
                <dd>About Us</dd>
                <dd>Courses</dd>
                <dd>Placements</dd>
                <dd>Level Up Lab</dd>
                <dd>Blog</dd>
                <dd>Contact Us</dd>
            </dl>
            <dl>
                <dt>Contact Us</dt>
                <dd>Email: info@skillhive.com </dd>
                <dd>Phone: +91-9876543210</dd>
                <dd>Address: 123 Tech Park, City</dd>
                <dd>Center, Bangalore, India</dd>
            </dl>
            <dl>
                <dt>
                    Legal
                </dt>
                <dd>Privacy Policy</dd>
                <dd>Terms & Conditions</dd>
            </dl>

        </aside>
    </section>
    <p>© 2024 Skill Hive. All Rights Reserved.</p>
</footer>`

  