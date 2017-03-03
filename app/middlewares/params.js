const checkQuery = (params = []) => async (ctx, next) => {
  params.forEach((param) => {
    if (!ctx.request.query[param]) {
      throw new Error(`query: ${param} missed!`);
    }
  });
  await next();
};

const checkBody = (params = []) => async (ctx, next) => {
  params.forEach((param) => {
    if (!ctx.request.body[param]) {
      throw new Error(`body: ${param} missed!`);
    }
  });
  await next();
};

const checkHeaders = (params = []) => async (ctx, next) => {
  params.forEach((param) => {
    if (!ctx.headers[param]) {
      throw new Error(`header: ${param} missed!`);
    }
  });
  await next();
};

export default {
  checkQuery,
  checkBody,
  checkHeaders
}