import React from 'react';

const Intro = () => {
  return (
    <div className='intro'>
        <section className="nes-container is-dark">
            <section className="message-list">
                <section className="message -left">
                    <div className="nes-balloon from-left is-dark">
                        <p>Hello friend.</p>
                        <p>This is where you can find selected works I've made. Most are 3D renders but you can also
                            find paintings,
                            sculptures, photo edits or whatever else interests me at times.</p>
                        <p>Theodore</p>
                    </div>
                    <img className="nes-avatar is-large" alt="Gravatar image example"
                        src="https://github.com/gkampiotis/theodorekampiotis.com/blob/main/images/profile_pic.jpg?raw=true"/>
                </section>
            </section>
        </section>

    </div>
  );
};

export default Intro;