<script setup>
import logo from "../assets/jadebridge-logo.jpg"
</script>

    <template>
        <nav class="navbar">
        <div class="brand">
        <img :src="logo" alt="jadebridge University Logo" class="logo" />

        <div class="school-name">
            <h2>Jadebridge University</h2>
            <p>KNOWLEDGE • INTEGRITY • PROGRESS</p>
        </div>
        </div>

        <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/academics">Academics</router-link>
        <router-link to="/admissions">Admissions</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/portal-login">Portal Login</router-link>
        </div>
    </nav>
    </template>

    <style scoped>
    .navbar {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    }

    .logo {
    width: 55px;
    height: 55px;
    object-fit: contain;
    }

    .school-name h2 {
    margin: 0;
    font-size: 20px;
    }

    .school-name p {
    margin: 3px 0 0;
    font-size: 12px;
    color: #666;
    }

    .nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
    }

    .nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    }

    .nav-links a:hover {
    color: #0056b3;
    }

    .nav-links a.router-link-active {
    color: #0056b3;
    font-weight: 600;
    }

    .portal-btn {padding: 10px 18px;
    background: #0056b3;
    color: white !important;
    border-radius: 6px;}

    .portal-btn:hover {background: #003d80;}
    </style>