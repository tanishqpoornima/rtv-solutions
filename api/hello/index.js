export default function (context, req) {
  context.res = {
    status: 200,
    body: { hello: "world" }
  };
}
