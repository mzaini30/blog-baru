import {text} from "input"
import {writeFileSync} from "fs"
import {slug} from "kumpulan-tools"

const judul = await text("Masukkan judul:")
const d = new Date()

// 2023-02-01 09:01:00
// const tanggal = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
// untuk yang bulan, tanggal, jam, menit, detik; jangan lupa dikasih 0 di depannya jika angkanya cuma satuan
const tanggal = `${d.getFullYear()}-${d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1}-${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()} ${d.getHours() < 10 ? "0" + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()}:${d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()}`

const template = `---
judul: "${judul}"
layout: "../../layout/post.astro"
ringkasan: ""
kategori: "new-post"
tanggal: "${tanggal}"
gambar: ""
---

`

writeFileSync(`./src/pages/post/${slug(judul)}.mdx`, template)