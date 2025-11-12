import { useState } from "react"

const useButton = ({ initialValue = false } = {}) => {
  const [active, setActive] = useState(initialValue)

  return {
    active,
    toggle: () => setActive(prev => !prev),
    reset: () => setActive(initialValue),
    bind: {
      onClick: () => setActive(prev => !prev)
    }
  };
};

export default useButton
