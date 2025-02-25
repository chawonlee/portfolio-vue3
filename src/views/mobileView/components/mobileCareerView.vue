<template>
  <section class="mobile-career-wrap">
    <section class="mobile-career-title">
      <div class="mobile-career-text">CAREER</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section class="mobile-career-container">
      <div
        class="mobile-career-company-box"
        v-for="(comp, idx) in careerData.comp"
        :key="idx"
      >
        <!--logo-->
        <!-- <div class="mobile-career-company-logo">
          <div class="mobile-career-logo-wrapper">
            <img :src="comp.src" alt="Company Logo" />
          </div>
        </div> -->
        <!--details-->
        <div class="mobile-career-company-detail">
          <h4 class="mobile-career-company-name">{{ comp.name }}</h4>
          <div class="mobile-career-period">{{ comp.period }}</div>
          <div class="mobile-career-explain">{{ comp.explain }}</div>
          <div
            class="mobile-career-roles"
            v-for="(role, roleIdx) in comp.roles"
            :key="roleIdx"
          >
            <div class="mobile-career-role">{{ role }}</div>
          </div>
          <div class="mobile-career-works">
            <div
              class="mobile-career-work"
              v-for="(work, workIdx) in comp.works"
              :key="workIdx"
            >
              <h5 class="mobile-career-work-title">{{ work.title }}</h5>
              <div class="mobile-career-work-period">{{ work.period }}</div>
              <div class="mobile-career-work-desc">{{ work.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import careerData from '@/views/mainView/components/data/careerData.json'
</script>
<style lang="scss">
.mobile-career-wrap {
  padding: 0;
  margin: 0;
  z-index: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: linear-gradient(to bottom, #d1d0e6, #a2a0d6);

  .mobile-career-title {
    top: 120px;
    position: relative; /* 자식 요소들의 기준점 설정 */
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 20%;
    font-size: clamp(35px, 10vw, 65px);
    color: white; /* 텍스트를 흰색으로 설정 */
    text-shadow:
      0px 1px 3px rgba(80, 80, 80, 0.6),
      /* 살짝 밝은 그림자 */ 0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    .mobile-career-text {
      position: absolute;
      top: 50%; /* 수직 가운데 정렬 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬을 위한 보정 */
      z-index: 2; /* 텍스트가 이미지 위에 표시되도록 설정 */
      text-shadow:
        0px 1px 3px rgba(80, 80, 80, 0.6),
        0px 3px 6px rgba(120, 120, 120, 0.4); /* 부드럽고 퍼짐 */
    }

    .mobile-check-svg {
      position: absolute;
      top: 50%; /* SVG를 텍스트보다 약간 아래로 이동 */
      left: 50%; /* 수평 가운데 정렬 */
      transform: translate(-50%, -50%); /* 가운데 정렬 */
      z-index: 1; /* 텍스트 뒤로 배치 */
      width: 15vw;
      min-width: 200px;
      height: auto;
    }
  }

  .mobile-career-container {
    margin-top: 200px;
    display: flex;
    flex-direction: column;

    .mobile-career-company-box {
      display: flex;
      .mobile-career-company-logo {
        padding-right: 3vw;
        border-right: 1px solid #ccc;
        .mobile-career-logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 9vw;
          height: 9vw;
          min-width: 120px;
          min-height: 120px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 100%;
          img {
            vertical-align: middle;
            width: 70%;
          }
        }
      }
      .mobile-career-company-detail {
        padding-bottom: 4rem;
        padding: 0 4vw;
        .mobile-career-company-name {
          padding-bottom: 0.5rem;
          font-weight: 900;
          font-size: 1.5rem;
        }
        .mobile-career-period {
          padding-bottom: 1rem;
          color: #6c757d;
        }
        .mobile-career-explain {
          padding-bottom: 1rem;
          word-break: keep-all;
        }
        .mobile-career-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-bottom: 2rem;
          .mobile-career-role {
            padding: 0.25rem 0.75rem;
            background-color: #222;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            color: #fff;
          }
        }
        .mobile-career-works {
          display: flex;
          flex-direction: column;
          .mobile-career-work {
            padding-bottom: 18px;
            margin-bottom: 0;
            border-bottom: none;
            .mobile-career-work-title {
              padding-left: 0.75rem;
              margin-bottom: 0.5rem;
              border-left: 4px solid #222;
              font-weight: 700;
              color: #222;
              font-size: 1rem;
            }
            .mobile-career-work-period {
              padding-bottom: 0.5rem;
              font-size: 0.875rem;
              color: #6c757d;
            }
            .mobile-career-work-desc {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
}
</style>
