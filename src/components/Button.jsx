function Button({ BtnText, Btnevent }) {
  return (
    <>
      <button
        onClick={Btnevent}
        className="bg-blue-500 ms-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {BtnText}
      </button>
    </>
  )
}

export default Button