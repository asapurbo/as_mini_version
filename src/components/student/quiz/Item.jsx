import Option from "./Option";

// eslint-disable-next-line react/prop-types
const Item = ({ info, videoId }) => {
    const { options, question, id } = info ?? {};

    return (
        <div className="quiz">
            <h4 className="question">
                {question}
            </h4>
            <form className="quizOptions">
                {/* <!-- Option --> */}
                {
                    options.map((i) => <Option key={i.id} opInfo={i} id={id} videoId={videoId}/>)
                }
                {/* <!-- Option --> */}
            </form>
        </div>
    );
};

export default Item;
