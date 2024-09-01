// eslint-disable-next-line react/prop-types
const Item = ({info, rank}) => {
    const {userName, quiz, totalResult, assignment} = info ?? {}
    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">{rank + 1}</td>
            <td className="table-td text-center capitalize">{userName}</td>
            <td className="table-td text-center">{quiz}</td>
            <td className="table-td text-center">{assignment}</td>
            <td className="table-td text-center">{totalResult}</td>
        </tr>
    );
};

export default Item;
