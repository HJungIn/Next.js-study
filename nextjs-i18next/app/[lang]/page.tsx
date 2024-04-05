import Link from "next/link";
import { getDictionary } from "../../dictionary";
import Image from "next/image";

export default async function Home({params} : {params : {lang : string}}) {
    const lang = await getDictionary(params.lang);
    console.log(lang, 'params for home')

  return (
    <main className="">
      <h1> 안녕! 나는 / 위치의 페이지야!</h1>
      <Link href={'/en'}>영어로</Link>
      <Link href={'/ja'}>일어로</Link>

      <div>
        <div>
          <label>{lang.form.name}</label>
          <input type="text"/>
        </div>
        <div>
          <label>{lang.form.email}</label>
          <input type="email"/>
        </div>
        <div>
          <label>{lang.form.city}</label>
          <input type="text"/>
        </div>
      </div>
    </main>
  );
}
