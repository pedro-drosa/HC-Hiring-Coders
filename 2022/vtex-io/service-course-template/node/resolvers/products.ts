import { COURSE_ENTITY } from "../utils/constants";

export const productList = async (
  _: any,
  { topN }: { topN: number },
  { clients: { masterdata } }: Context
) =>
  masterdata
    .scrollDocuments({
      dataEntity: COURSE_ENTITY,
      fields: ["count", "slug"],
      schema: "p0",
      size: topN,
      sort: `count DESC`,
    })
    .then(({ data }) => data);
