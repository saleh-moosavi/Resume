
export default function ContactIndex() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black dark:bg-white dark:text-black text-white">
      <p className="text-lg font-semibold">Scan Me</p>
      <img className="w-40 mb-5 mt-2" src="./assets/QrCode.svg" alt="" />
      <ul className="flex *:mx-5 items-center mt-5">
        <li>Telegram</li>
        <li>Linkedin</li>
        <li>Github</li>
        <li>Email</li>
      </ul>
    </div>
  )
}