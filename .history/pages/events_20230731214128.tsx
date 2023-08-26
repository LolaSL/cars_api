import React from 'react'

const Events: React.FC = () => {

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
          router.push("/businessrelationship");
        }, 500);
        return () => clearTimeout(redirectTimer);
      }, [router]);
  return (
    <div>Events</div>
  )
}

export default Events;