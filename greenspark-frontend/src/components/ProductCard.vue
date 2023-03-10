<script setup lang="ts">
  import Logo from "./common/Logo.vue";
  import Widget, { SelectableColor } from "../types/Widget";
  import Switch from "./common/Switch.vue";
  import Checkbox from "./common/Checkbox.vue";
  import ColorSelector from "./common/color-selector/ColorSelector.vue";
  import LinkDialog from "./LinkDialog.vue";
  import { store } from '../store';
  import { inject } from "vue";
  import ApiService, { API_SERVICE } from "../api/ApiService";

  const apiService = inject<ApiService>(API_SERVICE);

  const props = defineProps<{
    widget: Widget
  }>();

  function generateActionText() {
    return `This product ${props.widget.action} `;
  }

  function generateProductText() {
    return `${props.widget.amount} ${props.widget.type}`;
  }

  function getLogoColor() {
    return ([SelectableColor.white, SelectableColor.beige] as SelectableColor[])
      .includes(props.widget.selectedColor)
      ? SelectableColor.green
      : SelectableColor.white;
  }

  async function updateWidget(id: number, partial: Partial<Widget>) {
    const res = await apiService?.updateWidget(id, partial);
    if (res) {
      store.update(id, res);
    }
  }

</script>

<template>
  <div class="product-card-container">
    <div class="title-container" :class="widget.selectedColor">
      <Logo :color="getLogoColor()"></Logo>
      <div class="title" :style="{ color: getLogoColor() }">
        <h3 class="action">{{ generateActionText() }}</h3>
        <h3 class="product-description">{{ generateProductText() }}</h3>
      </div>
    </div>
    <div class="options">
      <div class="option">
        <div class="name">
          Link to Public Profile
          <v-menu open-on-hover close-delay="300" width="250" location="right bottom">
            <template v-slot:activator="{ props }" >
              <v-icon icon="mdi-information-outline" color="#3B755F" size="x-small" class="icon" v-bind="props"></v-icon>
            </template>
            <LinkDialog></LinkDialog>
          </v-menu>
        </div>
        <Checkbox :value="props.widget.linked"
                  :id="`cb-${props.widget.id}`"
                  @on-change="updateWidget(props.widget.id, { linked: $event })"></Checkbox>
      </div>
      <div class="option">
        <div class="name">Badge colour</div>
        <ColorSelector :id="props.widget.id.toString()"
                          :selected-color="props.widget.selectedColor"
                          @change="updateWidget(props.widget.id, { selectedColor: $event })">
        </ColorSelector>
      </div>
      <div class="option">
        <div class="name">Activate badge</div>
        <Switch :value="props.widget.active" @on-change="updateWidget(props.widget.id, { active: $event })"></Switch>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card-container {
  .title-container {
    padding: calc-rem(10) calc-rem(12);
    border-radius: 6px;
    @include color-classes();
    display: flex;
    align-items: center;
    .title {
      margin-left: 1rem;
      white-space: nowrap;
      .action {
        font-weight: normal;
        font-size: calc-rem(12);
        padding-bottom: calc-rem(8);
      }
      .product-description {
        font-weight: bold;
        font-size: calc-rem(17.84);
      }
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: calc-rem(13) 0 calc-rem(6.5);
      .name {
        font-size: calc-rem(14);
        color: $color-green;
        .icon {
          vertical-align: super;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
