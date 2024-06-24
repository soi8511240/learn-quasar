<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">회원가입</div>
        <div class="text-subtitle2 text-grey">반갑습니다</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-gutter-y-lg">
            <q-input
              filled
              label="이메일"
              hint="email을 입력해주세요"
            ></q-input>
            <q-input
              filled
              label="비밀번호"
              hint="영문 대/소문자 포함 8자 이상"
            ></q-input>
            <q-input
              filled
              label="비밀번호 확인"
              hint="영문 대/소문자 포함 8자 이상"
            ></q-input>
            <q-input
              filled
              label="나이"
              prefix="만 나이"
              suffix="세"
              input-class="text-right"
            ></q-input>
            <q-input
              filled
              v-model="card"
              label="Card"
              mask="#### - #### - #### - ####"
              fill-mask="0"
              unmasked-value
              hint="Mask: #### - #### - #### - ####, FillMask: #"
            />
          </div>
          <q-btn
            unelevated
            color="primary"
            size="lg"
            class="full-width q-mt-lg"
            label="회원가입 하기"
          />

          <q-btn
            flat
            class="full-width"
            label="로그인하기"
            to="/auth/sign-in"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>
