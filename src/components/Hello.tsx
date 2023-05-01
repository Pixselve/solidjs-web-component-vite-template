import styles from "./Hello.css?inline";

export default function Hello() {
  return <>
    <style>{styles}</style>
    <h1 class="hello">Hello World</h1>
  </>
}
