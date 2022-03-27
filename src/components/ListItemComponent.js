import React from "react";
import { Button, Card, Col, Row, Typography} from "antd";
import { HeartOutlined, LinkOutlined } from "@ant-design/icons";

export default function ListItemComponent({
  authors,
  fetching,
  addFavorite,
  removeFavorite,
}) {
  return (
    <>
      
        <Row gutter={[16, 16]} >
          {authors.map(({ _id, name, bio, link, isFavorite }) => {
            return (
              <Col key={_id} span={24} >
                <Card bordered={false} loading={fetching}>
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    {isFavorite ? (
                      <Button
                        size="small"
                        type="primary"
                        danger
                        ghost
                        onClick={() => removeFavorite(_id)}
                      >
                        Remove favorite
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        ghost
                        type="primary"
                        onClick={() => addFavorite(_id)}
                      >
                        <HeartOutlined /> Add favorite
                      </Button>
                    )}
                  </div>
                  <Typography.Paragraph>
                    <Typography.Text strong>Name :</Typography.Text> {name}
                  </Typography.Paragraph>
                  <Typography.Paragraph style={{ textAlign: "justify" }}>
                    <Typography.Text strong>
                      Bio :
                    </Typography.Text>{" "}
                    {bio}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    <Typography.Text strong>Link : </Typography.Text>
                    <Typography.Link
                      href={link}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      {link}
                      <LinkOutlined />
                    </Typography.Link>
                  </Typography.Paragraph>
                </Card>
              </Col>
            );
          })}
        </Row>
      
    </>
  );
}
