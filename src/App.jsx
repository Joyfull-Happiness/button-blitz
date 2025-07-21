import React, {useState} from 'react';
import { Heart, Eye, EyeOff, Plus, Minus } from 'lucide-react';

function App() {
  // TODO: Add state here using useState hooks
    const [likes, setLikes] = useState(0);
  const [count, setCount] = useState(0);
  const [secret, setSecret] = useState('');

  const clickHandlerLikes = () => {
    setLikes(likes + 1);
  };
  const clickHandlerPlus = () => {
    setCount(count + 1);
  };
  const clickHandlerMinus = () => {
    setCount(count - 1);
  };
  const secretText = () => {
    setSecret('You have $100 in your wallet!');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Student State Practice
        </h1>

        {/* Like Button Component */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Like Button
          </h2>
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              // TODO: Add onClick handler to increase likes
              onClick={clickHandlerLikes}
            >
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </button>
            <span className="text-gray-600">
              {likes} likes
            </span>
          </div>
        </div>

        {/* Counter Component */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Counter</h2>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
              onClick={clickHandlerMinus}
            >
              <Minus className="w-4 h-4" />
            </button>

            <span className="text-2xl font-bold text-gray-800 min-w-[3rem] text-center">
              {count}
            </span>

            <button
              className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
              // TODO: Add onClick handler to increase count
              onClick={clickHandlerPlus}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BONUS */}
        {/* Show/Hide Text Component */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Toggle Text
          </h2>
          <button
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            // TODO: Add onClick handler to toggle text visibility 
            onClick={setSecret}
          >
            <Eye className="w-4 h-4" />
            {/* TODO: Change icon and text based on visibility state */}
            <span>{setSecret}Show Secret Text</span>
          </button>

          {/* TODO: Conditionally render this text based on state */}
          {/* Remove the 'hidden' class and use conditional rendering instead */}
          <div className="hidden mt-3 p-3 bg-yellow-100 rounded border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              🎉 Congratulations! You've successfully added state to show/hide
              this text!
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">
            📝 Student Instructions:
          </h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Add useState hooks to track component state</li>
            <li>• Add onClick handlers to make buttons interactive</li>
            <li>• Use conditional rendering for the hidden text</li>
            <li>• Update displayed values to use state variables</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
