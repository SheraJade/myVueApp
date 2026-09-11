<template>
    <div class="page">

        <header class="hero">
            <div class="container">
                <p class="eyebrow">Admissions</p>

                <h1>Start Your Journey With Us</h1>

                <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button class="primary-btn">
                    Start Your Application
                </button>
            </div>
        </header>

        <main class="container main">

            <section class="card">
                <h2>Admission Requirements</h2>

                <div class="requirements-grid">

                    <div class="requirement-card">
                        <h3>Admission Process</h3>

                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Sed do eiusmod tempor</li>
                            <li>Ut labore et dolore magna</li>
                        </ul>
                    </div>

                    <div class="requirement-card">
                        <h3>Requirements</h3>

                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Praesent commodo cursus</li>
                            <li>Integer posuere erat</li>
                        </ul>
                    </div>

                    <div class="requirement-card">
                        <h3>Programs Offered</h3>

                        <ul>
                            <li>BS Computer Science</li>
                            <li>BS Information Technology</li>
                            <li>BS Business Administration</li>
                            <li>BS Education</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section class="card">

                <h2>Tuition Fee Calculator</h2>

                <p class="muted">
                    Select your program and year level to estimate your fees.
                </p>

                <div class="form-grid">

                    <label class="field">
                        <span>Program</span>

                        <select v-model="program">
                            <option>BS Computer Science</option>
                            <option>BS Information Technology</option>
                            <option>BS Business Administration</option>
                            <option>BS Education</option>
                            <option>BS Nursing</option>
                        </select>
                    </label>

                    <label class="field">
                        <span>Year Level</span>

                        <select v-model="year">
                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                        </select>
                    </label>

                    <label class="field">
                        <span>Units This Semester: {{ units }}</span>

                        <input
                            v-model="units"
                            type="range"
                            min="12"
                            max="27"
                        />

                        <div class="range-labels">
                            <span>12</span>
                            <span>27</span>
                        </div>
                    </label>

                </div>

                <div class="payment-terms">

                    <span>Payment Terms</span>

                    <div class="button-group">

                        <button
                            type="button"
                            class="pill"
                            :class="{ active: payment === 'Full' }"
                            @click="payment = 'Full'"
                        >
                            Full Payment
                        </button>

                        <button
                            type="button"
                            class="pill"
                            :class="{ active: payment === '3' }"
                            @click="payment = '3'"
                        >
                            3 Installments
                        </button>

                        <button
                            type="button"
                            class="pill"
                            :class="{ active: payment === '5' }"
                            @click="payment = '5'"
                        >
                            5 Installments
                        </button>

                    </div>

                </div>

                <div class="table-wrap">

                    <table>

                        <thead>
                            <tr>
                                <th>Schedule of Fees</th>
                                <th class="align-right">Amount</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>Tuition Fee (21 units × ₱650)</td>
                                <td class="align-right">₱13,650</td>
                            </tr>

                            <tr>
                                <td>Laboratory Fee (21 units × ₱150)</td>
                                <td class="align-right">₱3,150</td>
                            </tr>

                            <tr>
                                <td>Miscellaneous Fee (8% of tuition)</td>
                                <td class="align-right">₱1,092</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Registration Fee</td>
                                <td class="align-right">₱750</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Library Fee</td>
                                <td class="align-right">₱500</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Athletic Fee</td>
                                <td class="align-right">₱350</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Medical & Dental Fee</td>
                                <td class="align-right">₱400</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Guidance & Testing Fee</td>
                                <td class="align-right">₱300</td>
                            </tr>

                            <tr class="muted-row">
                                <td>ID & Insurance Fee</td>
                                <td class="align-right">₱450</td>
                            </tr>

                            <tr class="muted-row">
                                <td>Student Organization Fee</td>
                                <td class="align-right">₱250</td>
                            </tr>

                        </tbody>

                        <tfoot>
                            <tr class="total-row">
                                <td>Total Assessment (1st Year)</td>
                                <td class="align-right">₱20,892</td>
                            </tr>
                        </tfoot>

                    </table>

                </div>

                <p class="fine-print">
                    * Rates shown are sample figures for demonstration purposes.
                    Replace with your institution's actual schedule of fees.
                </p>

            </section>

            <section class="cta">

                <button class="primary-btn">
                    Start Your Application
                </button>

            </section>

        </main>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const program = ref('BS Computer Science')
const year = ref('1st Year')
const units = ref(21)
const payment = ref('Full')
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.page {
    min-height: 100vh;
    background: #f8fafc;
    color: #334155;
    font-family: Arial, Helvetica, sans-serif;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
}

.hero {
    background: #011033;
    color: white;
    padding: 60px 0;
}

.eyebrow {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
    margin: 0 0 8px;
}

.hero h1 {
    font-size: 36px;
    margin: 0 0 12px;
}

.lead {
    max-width: 640px;
    color: #cbd5e1;
    line-height: 1.6;
}

.main {
    padding: 40px 24px;
}

.card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
}

.card h2 {
    font-size: 24px;
    margin: 0 0 20px;
}

.muted {
    color: hsl(215, 86%, 43%);
}

.requirements-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.requirement-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 20px;
}

.requirement-card h3 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 12px;
}

.requirement-card ul {
    padding-left: 20px;
    color: #010101;
    line-height: 1.8;
    margin-bottom: 0;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 25px;
}

.field {
    display: block;
    font-size: 14px;
}

.field span {
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
}

select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: white;
    font-size: 14px;
}

input[type="range"] {
    width: 100%;
    margin-top: 12px;
}

.range-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #173d73;
    margin-top: 4px;
}

.payment-terms {
    margin: 24px 0;
}

.payment-terms > span {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
}

.button-group {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.pill {
    padding: 8px 14px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid #cbd5e1;
    background: white;
    color: #475569;
    cursor: pointer;
}

.pill.active {
    background: #0f172a;
    border-color: #0f172a;
    color: white;
}

.table-wrap {
    border: 1px solid #274f83;
    border-radius: 6px;
    overflow: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}

thead {
    background: #dde0e2;
    color: #1b5cb8;
    text-transform: uppercase;
    font-size: 12px;
}

th,
td {
    padding: 10px 16px;
    text-align: left;
}

tbody tr {
    border-top: 1px solid #6c7279;
}

.align-right {
    text-align: right;
}

.muted-row {
    color: #64748b;
}

.total-row {
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    font-weight: 700;
}

.fine-print {
    font-size: 12px;
    color: #94a3b8;
    margin: 16px 0 0;
}

.primary-btn {
    background: #978b08;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}

.primary-btn:hover {
    background: #1e293b;
}

.cta {
    text-align: center;
    padding: 24px 0 40px;
}

@media (max-width: 640px) {
    .requirements-grid {
        grid-template-columns: 1fr;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 30px;
    }

    .container {
        padding: 0 16px;
    }

    th,
    td {
        padding: 10px;
    }
}
</style>
