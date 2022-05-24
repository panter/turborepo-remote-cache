function createResponse(status: number, body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, { ...init, status });
}

export function methodNotAllowed(body?: BodyInit | null, init?: ResponseInit): Response {
  return createResponse(405, body, init);
}

export function notFound(body?: BodyInit | null, init?: ResponseInit) {
  return createResponse(404, body, init);
}

export function accepted(body?: BodyInit | null, init?: ResponseInit) {
  return createResponse(202, body, init);
}

export function noContent(body?: BodyInit | null, init?: ResponseInit) {
  return createResponse(204, body, init);
}

export function unprocessableEntity(body?: BodyInit | null, init?: ResponseInit): Response {
  return createResponse(422, body, init);
}

export function internalServerError(body?: BodyInit | null, init?: ResponseInit): Response {
  return createResponse(500, body, init);
}
