import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import styles from "../styles/styles.module.css";

const blog: React.FC = () => {
  const router = useRouter();
  const [input, setInput] = useState('')

  const submitComment = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: input
        })
      })
      
      if (res.status === 200) {
        alert('You are subscribed!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch(err) {
      alert(err)
    }
  }

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/blog");
    }, 500);
    return () => clearTimeout(redirectTimer);
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <h1 className="blog__title">BLOG</h1>
      <h2>Does Modifying a Classic Car Decrease Its Value?</h2>
      <p>
        Even if you don’t see yourself parting with your classic car, it’s value
        is an important factor. Value changes over time for countless reasons,
        but one of them is modification. Whether you’re adding modern features
        or souping up the engine, will your classic lose value if you modify it?
      </p>
      <h3>Driveability vs. Authenticity</h3>
      <p>
        An important dynamic to be aware of is driveability vs. authenticity. A
        common motivation behind modern upgrades for a classic car is to improve
        driving experience and extend its longevity as a usable vehicle, whether
        it’s related to the engine, steering, interior features, or other
        elements. On the flip side, many collector car hobbyists will avoid
        modern upgrades and focus their restoration and maintenance work on
        total authenticity to the original traits of the car and the period it’s
        from. Generally speaking, authenticity wins out if you want to minimize
        loss in value, but this depends on the car itself and the collector
        market, which isn’t always easy to predict.
      </p>
      <h3>Walking the Line</h3>
      <p>
        If you have a pretty authentic classic car and want to make
        modifications without threatening its value or faithfulness, you might
        assume that you’re out of options. Fortunately, this isn’t always the
        case. Plenty of upgrades can be done without introducing noticeable or
        irreversible changes to the vehicle, as long as you’re prepared to do or
        pay for the work involved in returning it to its original state.
        Limiting yourself to bolt-on or bolt-in upgrades and keeping the
        original parts is a great way to make this work. Additionally, many
        changes can improve the driveability and longevity of a car without
        being noticeable, such as micro-polishing transmission gears.{" "}
      </p>
      <h3>Set Your Expectations</h3>
      <p>
        Different hobbyists will get into classic cars for different reasons.
        Some will restore for the love of the process, some will collect
        pristine-condition models that are ready for a showroom, and others are
        planning to resell. It’s pretty common for hobbyists to simply give
        their cars the treatment that interests them and fits in their budget,
        understanding from the get-go that selling at a loss is a likelihood. On
        the other hand, buying and reselling for profit may not be feasible for
        the average collector, but some manage to pull it off. Ultimately, it’s
        wise to do your homework on the upgrades you want and set your
        expectations (and your long-term budget) accordingly.
      </p>
      <h3>Leave a comment</h3>
      <p>
        If you want to leave a feedback to this post or to some other users
        comment, simply fill out the form below
      </p>
      <div className="p-8 justify-center items-center h-screen flex">
              <form
                  className="flex"
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
          onSubmit={submitComment}
        >
          <div className="grid xl:grid-cols-2 xl:gap-10">
            <label>Name</label>
            <input
              className="bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='name' type='text' aria-label='name' placeholder='Enter your name'"
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
              required={true}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              className="bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='email' type='email' aria-label='email address' placeholder='Enter your email address'"
              type="text"
              name="email"
              onChange={handleInput}
              value={formData.email}
            />
          </div>

          <div>
            <label>Your Comment</label>
            <textarea
              className="bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='textarea' type='text' aria-label='textarea' placeholder='Enter your comment'"
              name="comment"
              onChange={handleInput}
              value={formData.comment}
            ></textarea>
          </div>
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'"
            type='submit'
            onClick={submitForm}
                  >
            Leave a comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default blog;
