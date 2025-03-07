<template>
  <section class="mobile-projects-wrap">
    <section class="mobile-projects-title">
      <div class="mobile-projects-text">PROJECTS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section class="mobile-projects-container">
      <div
        v-for="(project, projectIdx) in projectsData.list"
        :key="projectIdx"
        class="mobile-project-box"
        @click="handleProjectClick(project)"
      >
        <h3 class="project-title">{{ project.projectNm }}</h3>
        <div class="project-skills">
          <div class="skills-row">
            <span
              v-for="(skill, index) in project.skills.slice(0, 3)"
              :key="index"
              class="skill-tag"
            >
              {{ skill }}
            </span>
            <span v-if="project.skills.length > 3" class="more-skills">
              +{{ project.skills.length - 3 }}개
            </span>
          </div>
        </div>
        <div class="project-period">{{ project.period }}</div>
        <p class="project-description">
          {{ getProjectDescription(project) }}
        </p>
      </div>
    </section>
    <mobileProjectPopup
      v-if="isPopupOpen"
      :project="selectedProject"
      @closePopup="closePopup"
    />
  </section>
</template>
<script setup>
import projectsData from '@/views/mainView/components/data/projectsData.json'
import mobileProjectPopup from './components/mobileProjectsPopup.vue'
import { ref } from 'vue'

//선택한 프로젝트
const selectedProject = ref(null)
//팝업 오픈 여부
const isPopupOpen = ref(false)

//프로젝트 목적 (일부 소개)
const getProjectDescription = project => {
  const overview = project.detail.find(item => item.title === '프로젝트 개요')
  if (!overview) return ''

  const purpose = overview.content.find(item => item.title === '목적')
  if (!purpose) return ''

  const content = purpose.content[0] || ''
  return content.length > 70 ? content.slice(0, 70) + '...' : content
}

//프로젝트 클릭 시 선택된 프로젝트 팝업 오픈
const handleProjectClick = project => {
  selectedProject.value = project
  isPopupOpen.value = true
}

//팝업 닫기
const closePopup = () => {
  isPopupOpen.value = false
}
</script>
<style lang="scss">
.mobile-projects-wrap {
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
  background: linear-gradient(to bottom, #dadada, #d1d0e6);
  .mobile-projects-title {
    margin-top: 120px;
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
    .mobile-projects-text {
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

  .mobile-projects-container {
    margin: 100px 0 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 16px;
    width: 96vw;
    max-width: 800px;
    padding: 0 16px;

    .mobile-project-box {
      display: flex;
      cursor: pointer;
      flex-direction: column;
      padding: 20px;
      background: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease-in-out;
      border-radius: 20px;

      .project-title {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 12px 0;
      }

      .project-skills {
        margin-bottom: 12px;

        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .skill-tag {
          font-size: 12px;
          padding: 4px 8px;
          background-color: #f3f4f6;
          border-radius: 4px;
          white-space: nowrap;
          height: 20px;
          line-height: 20px;
          display: inline-flex;
          align-items: center;
        }

        .more-skills {
          font-size: 12px;
          color: #666;
          height: 20px;
          line-height: 20px;
          white-space: nowrap;
        }
      }

      .project-period {
        font-size: 14px;
        color: #666;
        margin-bottom: 12px;
      }

      .project-description {
        font-size: 14px;
        line-height: 1.5;
        color: #444;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .mobile-project-box:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
