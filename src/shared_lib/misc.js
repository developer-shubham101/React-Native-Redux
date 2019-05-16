 

export async function withAuth(actionProm, dispatchFunc) {
  try {
    return await actionProm;
  } catch (e) {
    if (e.status === 401) return await dispatchFunc();
    throw e;
  }
}

export const sortByCreatedAt = (a, b) => (a.createdAt < b.createdAt ? 1 : -1);
export const sortByLastUpdated = (a, b) =>
  a.lastUpdated < b.lastUpdated ? 1 : -1;
