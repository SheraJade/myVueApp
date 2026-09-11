    <template>
    <main class="home">

    <section class="hero">
        <div class="hero-content">
        <div class="established">
            <span></span>
            ESTABLISHED 2005
        </div>

        <h1>
            Exemplary
            <em>Learning,</em>
            <br />
            Knowledge for Life
        </h1>

        <div class="gold-line"></div>

        <p>
            A leading educational institution in the Philippines.
            Jadebridge University nurtures intellectual growth
            and spiritual development through a commitment to
            <strong>Scientia et compassio</strong>
            (Knowledge and Compassion).
        </p>

        <div class="buttons">
            <button class="primary">Explore Academics</button>
            <button class="secondary">Request Information</button>
        </div>

        <div class="stats">
            <div>
            <h2>123+</h2>
            <p>Years of Excellence</p>
            </div>

            <div>
            <h2>15+</h2>
            <p>Academic Programs</p>
            </div>

            <div>
            <h2>6,000+</h2>
            <p>Active Students</p>
            </div>

            <div>
            <h2>20+</h2>
            <p>Partner Institutions</p>
            </div>
        </div>
        </div>

        <div class="hero-image">
        <div class="image-card">
            <img src="../assets/jadebridge-logo.jpg" alt="Jadebridge University" />
            <h2>Jadebridge<br />University</h2>
            <h4>KNOWLEDGE • INTEGRITY • PROGRESS</h4>
            <div class="small-line"></div>
            <p>“A Heritage of Excellence,<br />A Future with Compassion</p>
        </div>
        </div>
    </section>

    <section class="admissions-section">

        <div class="admissions-header">
        <p>JOIN OUR COMMUNITY</p>
        <h2>Admissions</h2>
        <div class="admissions-gold-line"></div>
        </div>

        <div class="admissions-cards">

        <div class="admission-card">

            <div class="icon">
            📋
            </div>

            <h3>Admission Process</h3>

            <div class="step">
            <span>1</span>
            <p>Submit online application form via the student portal.</p>
            </div>

            <div class="step">
            <span>2</span>
            <p>Take the Jadebridge Entrance Examination.</p>
            </div>

            <div class="step">
            <span>3</span>
            <p>Undergo interview with department heads (if applicable).</p>
            </div>

            <div class="step">
            <span>4</span>
            <p>Pay enrollment fees and register for classes.</p>
            </div>

            <a href="#">Learn more →</a>

        </div>

        <div class="admission-card">

            <div class="icon">
            📄
            </div>

            <h3>Requirements</h3>

            <ul class="requirements">
            <li>Original Form 138 (Report Card)</li>
            <li>Certificate of Good Moral Character</li>
            <li>PSA Birth Certificate (Photocopy)</li>
            <li>2×2 ID Pictures with white background</li>
            <li>Transfer Credentials (for Transferees)</li>
            </ul>

            <a href="#">View full checklist →</a>

        </div>

        <div class="admission-card">

            <div class="icon">
            🎓
            </div>

            <h3>Programs Offered</h3>

            <p class="program-description">
            We offer a wide range of programs catering to different educational stages:
            </p>

            <div class="program">
            Kindergarten & Elementary
            </div>

            <div class="program">
            Junior & Senior High School
            </div>

            <div class="program">
            Undergraduate Programs
            </div>

            <div class="program">
            School of Graduate Studies
            </div>

        </div>

        </div>

    </section>

    <footer class="footer">
        © 2026 Jadebridge University. All Rights Reserved.
    </footer>

    </main>
    </template>

    <style scoped>

    .home {
    min-height: calc(100vh - 90px);
    }

    .hero {
    min-height: 50vh;
    display: flex;
    align-items: center;
    padding: 40px 60px;
    gap: 50px;
    box-sizing: border-box;
    }

    .hero-content {
    width: 50%;
    }

    .established {
    color: #a38427;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 15px;
    }

    .established span {
    width: 45px;
    height: 2px;
    background: #b59a45;
    }

    h1 {
    color: #29106b;
    font-family: Georgia, serif;
    font-size: 55px;
    line-height: 1.05;
    margin: 35px 0 25px;
    }

    h1 em {
    color: #a88724;
    font-weight: normal;
    }

    .gold-line {
    width: 60px;
    height: 3px;
    background: #b89a3b;
    margin-bottom: 25px;
    }

    .hero-content > p {
    color: #4d4d4d;
    font-size: 17px;
    line-height: 1.8;
    max-width: 600px;
    }

    .hero-content strong {
    color: #29106b;
    }

    .buttons {
    display: flex;
    gap: 25px;
    margin-top: 25px;
    }

    .primary,
    .secondary {
    padding: 17px 30px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    }

    .primary {
    background: #2c096c;
    color: white;
    border: none;
    }

    .secondary {
    background: white;
    color: #2c096c;
    border: 2px solid #aaa;
    }

    .stats {
    margin-top: 35px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    }

    .stats div {
    text-align: center;
    padding: 0 20px;
    border-right: 1px solid #ddd;
    }

    .stats div:last-child {
    border-right: none;
    }

    .stats h2 {
    color: #28106a;
    margin: 0;
    font-size: 25px;
    }

    .stats p {
    margin: 8px 0 0;
    font-size: 12px;
    color: #555;
    }

    .hero-image {
    width: 50%;
    display: flex;
    justify-content: center;
    }

    .image-card {
    width: 85%;
    height: 500px;
    border-radius: 20px;
    background: linear-gradient(135deg, #444af1, #fffdf3 45%, #f7f2df);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    text-align: center;
    }

    .image-card img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    }

    .image-card h2 {
    color: #29106b;
    font-family: Georgia, serif;
    font-size: 32px;
    line-height: 1.2;
    }

    .image-card h4 {
    color: #a88724;
    letter-spacing: 5px;
    margin: 5px;
    }

    .small-line {
    width: 70px;
    height: 2px;
    background: #a88724;
    margin: 20px;
    }

    .image-card p {
    font-family: Georgia, serif;
    font-style: italic;
    color: #444;
    font-size: 18px;
    line-height: 1.5;
    }

    .admissions-section {
    background: #f8f9fb;
    padding: 60px 40px 70px;
    }

    .admissions-header {
    text-align: center;
    margin-bottom: 35px;
    }

    .admissions-header p {
    color: #b18a20;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0 0 8px;
    }

    .admissions-header h2 {
    color: #2b1b5e;
    font-family: Georgia, serif;
    font-size: 2rem;
    margin: 0;
    }

    .admissions-gold-line {
    width: 45px;
    height: 2px;
    background: #cba100;
    margin: 12px auto 0;
    }

    .admissions-cards {
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    }

    .admission-card {
    background: white;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
    }

    .icon {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #f5f1e5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 15px;
    }

    .admission-card h3 {
    color: #2b1b5e;
    font-family: Georgia, serif;
    font-size: 1.1rem;
    margin: 0 0 15px;
    }

    .step {
    display: flex;
    gap: 8px;
    margin-bottom: 9px;
    }

    .step span {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #cba100;
    color: white;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .step p {
    margin: 0;
    font-size: 11px;
    line-height: 1.5;
    color: #555;
    }

    .admission-card a {
    display: inline-block;
    margin-top: 8px;
    color: #2b1b5e;
    font-size: 11px;
    font-weight: 600;
    text-decoration: none;
    }

    .requirements {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .requirements li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 11px;
    color: #555;
    line-height: 1.4;
    }

    .requirements li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #42b883;
    font-weight: bold;
    }

    .program-description {
    font-size: 11px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 12px;
    }

    .program {
    border: 1px solid #e5e5e5;
    padding: 9px;
    margin-bottom: 7px;
    border-radius: 3px;
    font-size: 10px;
    color: #2b1b5e;
    }

    .footer {
    background: #28105f;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 10px;
    }

    @media (max-width: 1000px) {
    .navbar {
        padding: 15px 25px;
    }

    .nav-links {
        gap: 12px;
    }

    .hero {
        flex-direction: column;
    }

    .hero-content,
    .hero-image {
        width: 100%;
    }

    .hero-image {
        margin-top: 30px;
    }
    }

    @media (max-width: 900px) {
    .admissions-cards {
        grid-template-columns: 1fr;
    }
    }

    </style>