package com.yanlongz.dto;

/**
 * Created by Administrator on 2016/6/20.
 */
//用于封装返回数据
public class ResultData<T> {
    private boolean isSuccess;
    private T data;
    private String errorMessage;


    public ResultData(boolean isSuccess, T data) {
        this.isSuccess = isSuccess;
        this.data = data;
    }

    public ResultData(boolean isSuccess, String errorMessage) {
        this.isSuccess = isSuccess;
        this.errorMessage = errorMessage;
    }

    public boolean isSuccess() {
        return isSuccess;
    }

    public void setIsSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
