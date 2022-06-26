const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-white text-black text-center">
      <h1>Join Our Defi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4 border"
          type="email"
          placeholder="Enter your email"
        />
        <button className="mt-3">Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <span>Yes, I agree to receive email comunications from Defi</span>
      </div>
    </div>
  )
}

export default Subscribe
