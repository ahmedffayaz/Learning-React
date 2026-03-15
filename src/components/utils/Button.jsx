function Button({ BtnText, Btnevent }) {
  return (
    <>
      <button
        onClick={Btnevent}
        className="bg-gray-600 ms-5 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm"
      >
        {BtnText}
      </button>
    </>
  )
}

export default Button