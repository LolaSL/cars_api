import React from 'react'

const blog : React.FC = () => {
    const router = useRouter();
    
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        router.push("/businessrelationship");
      }, 500);
      return () => clearTimeout(redirectTimer);
    }, [router]);
  return (
    <div>blog</div>
  )
}

export default blog