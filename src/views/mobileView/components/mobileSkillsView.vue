<template>
  <section class="mobile-skills-wrap">
    <section class="mobile-skills-title">
      <div class="mobile-skills-text">SKILLS</div>
      <img
        ref="checkSvg"
        src="@/assets/svg/check.svg"
        alt="check-svg"
        class="mobile-check-svg"
      />
    </section>
    <section class="mobile-skills-container">
      <v-card class="mobile-skill-card" width="90vw" height="70vh">
        <!-- v-tabs에서 각 카테고리를 표시 -->
        <v-tabs
          v-model="tab"
          class="mobile-skill-card-tabs"
          bg-color="transparent"
          color="basil"
          grow
        >
          <v-tab
            v-for="(skills, category) in skillsData"
            :key="category"
            :text="category"
            :value="category"
          >
            {{ category }}
          </v-tab>
        </v-tabs>

        <!-- 각 탭에 해당하는 내용 -->
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="(skills, category) in skillsData"
            :key="category"
            :value="category"
          >
            <v-card color="transparent" flat style="overflow-y: auto">
              <!-- 기술 항목들을 skillNm으로 출력 -->
              <v-card-text class="mobile-skill-card-detail">
                <div
                  v-for="(skill, index) in skills"
                  :key="index"
                  class="mobile-skill-box"
                >
                  <div class="mobile-skill-nm">
                    <img :src="skill.img" :alt="skill.skillNm" />
                    <div>{{ skill.skillNm }}</div>
                  </div>
                  <div class="mobile-skill-detail">{{ skill.detail }}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </section>
  </section>
</template>
<script setup>
import skillsData from '@/views/mainView/components/data/skillData.json'
import { ref, onBeforeUnmount, onMounted } from 'vue'

const tab = ref('Framework & Library')
</script>
<style lang="scss">
.mobile-skills-wrap {
  position: relative;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 가로 정렬
  justify-content: center; // 위에서부터 정렬
  width: 100%;
  height: 100vh; // 전체 높이를 자식 요소에 맞춤
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(to bottom, #626262, #dadada);

  .mobile-skills-title {
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
    .mobile-skills-text {
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

  .mobile-skills-container {
    .mobile-skill-card {
      background-color: rgb(255, 255, 255, 0.5);
      .mobile-skill-card-tabs {
        height: 50px;
      }
      .mobile-skill-card-detail {
        height: calc(70vh - 50px);
        overflow-y: scroll;
        .mobile-skill-box {
          margin: 0 0 10px 0;
          display: block;
          padding: 10px;
          background-color: rgba(255, 255, 255);
          height: 100px;
          border-radius: 10px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
          .mobile-skill-nm {
            display: flex;
            padding-bottom: 8px;
            align-items: center;
            img {
              width: 25px;
              padding-right: 6px;
            }
          }
          .mobile-skill-detail {
            color: #4b5563;
          }
        }
      }
    }
  }
}
</style>
