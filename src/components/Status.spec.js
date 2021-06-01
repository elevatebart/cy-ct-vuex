import Vuex from "vuex";
import { mount } from "@cypress/vue";
import Status from "./Status.vue";

describe("<Status />", () => {
  it("Render the vuex store", () => {
    mount(Status, {
      plugins: [Vuex],
      // we make the store a function to let the localvue version add the vuex state
      // before mocking it
      store: () =>
        new Vuex.Store({
          getters: {
            activeTodosCount: () => {
              return 42;
            },
            doneTodosCount: () => {
              return 12;
            },
          },
        }),
    });

    cy.contains(".active-todos", "42");
    cy.contains(".done-todos", "12");
  });
});
