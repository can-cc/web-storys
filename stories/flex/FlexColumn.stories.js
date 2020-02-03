import FlexColumn1 from "./FlexColumn1.vue";
import FlexColumn2 from "./FlexColumn2.vue";

export default {
  title: "Flex/Column"
};

export const FlexColumnExpand = () => ({
  components: { FlexColumn: FlexColumn1 },
  template: "<flex-column></flex-column>"
});

export const FlexColumnOverflow = () => ({
  components: { FlexColumn: FlexColumn2 },
  template: "<flex-column></flex-column>",
});
