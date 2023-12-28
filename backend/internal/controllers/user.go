package controllers

import (
	"net/http"
	"strconv"
	"users/internal/command"
	"users/internal/domain"
	"users/internal/query"

	"github.com/gin-gonic/gin"
)

func (h *Controller) createUser(c *gin.Context) {
	var input command.CreateUser

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	user := &domain.User{
		Email:    input.Email,
		Password: input.Password,
		Phone:    input.Phone,
		Username: input.Username,
		Name:     input.Name,
		Surname:  input.Surname,
	}

	if _, err := h.services.User.Create(c, user); err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, statusResponse{Status: "created"})
}

func (h *Controller) getAllUsers(c *gin.Context) {
	var p query.Pagination

	if err := c.BindQuery(&p); err != nil {
		p.Page = 1
		p.PageSize = 10
	}

	users, err := h.services.User.GetAll(c, p.Page, p.PageSize)
	if err != nil {
		newErrorResponse(c, http.StatusNotFound, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{"users": users})
}

func (h *Controller) updateUser(c *gin.Context) {
	var input command.UpdateUser

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "There is no such user")
		return
	}

	user := &domain.User{
		Email:    input.Email,
		Password: input.Password,
		Phone:    input.Phone,
		Username: input.Username,
		Name:     input.Name,
		Surname:  input.Surname,
	}

	if err := h.services.User.Update(c, user, id); err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, statusResponse{Status: "updated"})
}

func (h *Controller) deleteUser(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "There is no such user")
		return
	}

	if err := h.services.User.Delete(c, id); err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, statusResponse{Status: "deleted"})
}
