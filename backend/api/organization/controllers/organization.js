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

    let entities;

    if (ctx.query._q) {
      entities = await strapi.services.organization.search(ctx.query);
    } else {
      entities = await strapi.services.organization.find(ctx.query);
    }

    let filterdOrganizations = [];

    entities.forEach((entity) => {
      const organization = sanitizeEntity(entity, {
        model: strapi.models.organization,
      });

      organization.members.forEach((member) => {
        if (member.id === user.id) filterdOrganizations.push(entity);
      });
    });

    return filterdOrganizations;
  },

  async findOne(ctx) {
    const { user } = ctx.state;

    if (!user) return null;

    const entity = await strapi.services.organization.findOne(ctx.query);
    let isMember = false;

    entity.members.forEach((member) => {
      if (member.id === user.id) isMember = true;
    });

    return isMember ? entity : null;
  },
};
