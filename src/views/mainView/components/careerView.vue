<template>
  <section class="career-wrap">
    <section class="career-title">
      <div>CAREER</div>
    </section>
    <section class="career-container">
      <div
        class="career-company-box"
        v-for="(comp, idx) in careerData.comp"
        :key="idx"
      >
        <!--logo-->
        <div class="career-company-logo">
          <div class="career-logo-wrapper">
            <img :src="comp.src" alt="Company Logo" />
          </div>
        </div>
        <!--details-->
        <div class="career-company-detail">
          <h4 class="career-company-name">{{ comp.name }}</h4>
          <div class="career-period">{{ comp.period }}</div>
          <div class="career-explain">{{ comp.explain }}</div>
          <div
            class="career-roles"
            v-for="(role, roleIdx) in comp.roles"
            :key="roleIdx"
          >
            <div class="career-role">{{ role }}</div>
          </div>
          <div class="career-works">
            <div
              class="career-work"
              v-for="(work, workIdx) in comp.works"
              :key="workIdx"
            >
              <h5 class="career-work-title">{{ work.title }}</h5>
              <div class="career-work-period">{{ work.period }}</div>
              <div class="career-work-desc">{{ work.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import careerData from './data/careerData.json'
</script>
<style lang="scss">
.career-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffbe6;
  z-index: 2;

  .career-title {
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 15%;
    padding-bottom: 50px;
    font-size: 4rem;
    text-shadow:
      1px 1px 1px #fff,
      1px 2px 1px #fff,
      1px 3px 1px #fff,
      1px 4px 1px #fff,
      1px 18px 6px rgba(16, 16, 16, 0.4),
      1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2),
      1px 30px 60px rgba(16, 16, 16, 0.4);
  }

  .career-container {
    display: flex;
    flex-direction: column;

    .career-company-box {
      display: flex;
      .career-company-logo {
        padding-right: 3rem;
        border-right: 1px solid #ccc;
        .career-logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 15rem;
          height: 15rem;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 100%;
          img {
            vertical-align: middle;
            width: 70%;
          }
        }
      }
      .career-company-detail {
        padding-bottom: 4rem;
        padding-left: 3rem;
        .career-company-name {
          padding-bottom: 0.5rem;
          font-weight: 900;
          font-size: 1.5rem;
        }
        .career-period {
          padding-bottom: 1rem;
          color: #6c757d;
        }
        .career-explain {
          padding-bottom: 1rem;
          word-break: keep-all;
        }
        .career-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-bottom: 2rem;
          .career-role {
            padding: 0.25rem 0.75rem;
            background-color: #222;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #fff;
          }
        }
        .career-works {
          display: flex;
          flex-direction: column;
          .career-work {
            padding-bottom: 18px;
            margin-bottom: 0;
            border-bottom: none;
            .career-work-title {
              padding-left: 0.75rem;
              margin-bottom: 0.5rem;
              border-left: 4px solid #222;
              font-weight: 700;
              color: #222;
              font-size: 1rem;
            }
            .career-work-period {
              padding-bottom: 0.5rem;
              font-size: 0.875rem;
              color: #6c757d;
            }
            .career-work-desc {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
}
</style>
