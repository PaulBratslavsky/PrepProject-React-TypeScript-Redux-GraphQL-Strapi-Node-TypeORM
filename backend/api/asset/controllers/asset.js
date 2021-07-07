const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    const { user } = ctx.state;

    if (!user) return null;

    const userInfo = await strapi
      .query("user", "users-permissions")
      .findOne({ id: user.id });

    const ueserOrganizationIds = userInfo.organizations.map((item) => item.id);

    let entities;

    if (ctx.query._q) {
      entities = await strapi.services.asset.search(ctx.query);
    } else {
      entities = await strapi.services.asset.find(ctx.query);
    }

    let filterdAssets = [];

    ueserOrganizationIds.forEach((organizationId) => {
      entities.map((entity) => {
        const asset = sanitizeEntity(entity, {
          model: strapi.models.asset,
        });

        if (asset.organization.id === organizationId) {
          filterdAssets.push(asset);
        }
      });
    });

    return filterdAssets;
  },
};
