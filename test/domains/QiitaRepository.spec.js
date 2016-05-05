/* @flow */
import assert from "power-assert"
import nock from "nock"
import QiitaRepository from "domains/QiitaRepository"
import QiitaItem from "domains/QiitaItem"
import type { ItemObject } from "types/QiitaType"

describe("QiitaRepository", () => {
  let repository: QiitaRepository

  beforeEach(() => {
    repository = new QiitaRepository(
      process.env.QIITA_ACCESS_TOKEN || "",
    )
  })

  before(() => {
    const payload: Array<ItemObject> = [
      {
        title: "Title1",
        body: "Body1",
        user: { id: "User1" },
      },
      {
        title: "Title2",
        body: "Body2",
        user: { id: "User2" },
      },
    ]
    nock("https://feedforce.qiita.com")
    .get("/api/v2/items")
    .query(true)
    .reply(200, payload)
  })

  after(() => {
    nock.cleanAll()
  })

  describe("new", () => {
    it("should be return new instance", () => {
      assert(repository instanceof QiitaRepository)
    })
  })

  describe("search", () => {
    it("should be return promise of Array of QiitaItem", async done => {
      try {
        const posts = await repository.search("user:tnamiki")
        posts.forEach(x => assert(x instanceof QiitaItem))
        assert(posts.length === 2)
        assert.deepEqual(posts[0].toObject(), {
          title: "Title1",
          body: "Body1",
          user: "User1",
        })
        assert.deepEqual(posts[1].toObject(), {
          title: "Title2",
          body: "Body2",
          user: "User2",
        })
      } catch (err) {
        assert.fail()
      }
      done()
    })
  })
})
