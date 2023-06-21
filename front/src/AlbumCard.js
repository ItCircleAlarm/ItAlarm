import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AlbumCard = ({ title, deadline, link, description, imageUrl }) => {
  // props 추가
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={imageUrl} // 이미지 URL 추가
          alt={title} // alt text 추가
        />

        <div className="card-body">
          <h5>{title}</h5> {/* 동아리 제목 */}
          <p className="card-text">{description}</p> {/* 동아리 설명 */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={link} // 동아리 사이트 링크로 변경
                className="btn btn-sm btn-outline-secondary"
                target="_blank" // 새 탭에서 열기
                rel="noopener noreferrer" // 보안을 위한 설정
              >
                사이트 들어가기
              </a>
            </div>
            신청 마감날짜:
            <small className="text-muted">{deadline}</small> {/* 마감일 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
