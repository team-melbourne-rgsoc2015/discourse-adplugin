import { ajax } from "discourse/lib/ajax";
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  settings: null,

  model() {
    return ajax("/admin/plugins/pluginad/house_creatives.json").then((data) => {
      this.set("settings", Ember.Object.create(data.settings));
      return data.house_ads.map((ad) => Ember.Object.create(ad));
    });
  },

  setupController(controller, model) {
    controller.setProperties({
      model,
      houseAdsSettings: this.get("settings"),
      loadingAds: false,
    });
  },
});
